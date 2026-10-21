from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, BeforeValidator
from typing import Annotated, Optional
import uuid
from datetime import datetime, timezone
from contextlib import asynccontextmanager

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# 🚀 FastAPI Lifespan Handler (To fix on_event deprecation warning)
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Database client is ready via global scope
    logging.info("Starting up Kashi Vadhyar API & MongoDB client...")
    yield
    # Shutdown: Close MongoDB client connection safely
    logging.info("Shutting down Kashi Vadhyar API & closing MongoDB client...")
    client.close()

app = FastAPI(title="Kashi Vadhyar API", lifespan=lifespan)
api_router = APIRouter(prefix="/api")

PyObjectId = Annotated[str, BeforeValidator(str)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True, extra="ignore")

    id: PyObjectId = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")

    def to_mongo(self) -> dict:
        return self.model_dump(by_alias=True)

    @classmethod
    def from_mongo(cls, doc: dict):
        if doc and "_id" in doc:
            doc["_id"] = str(doc["_id"])
        return cls(**doc)


class ContactEnquiryCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    phone: str = Field(min_length=6, max_length=20)
    service: Optional[str] = ""
    travel_date: Optional[str] = ""
    message: Optional[str] = ""


class ContactEnquiry(BaseDocument):
    name: str
    phone: str
    service: str = ""
    travel_date: str = ""
    message: str = ""
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "Kashi Vadhyar API — Namaste"}


@api_router.get("/health")
async def health():
    return {"status": "ok", "service": "kashi-vadhyar"}


@api_router.post("/contact")
async def create_contact_enquiry(payload: ContactEnquiryCreate):
    enquiry = ContactEnquiry(**payload.model_dump())
    await db.enquiries.insert_one(enquiry.to_mongo())
    return {"ok": True, "enquiry_id": enquiry.id}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="127.0.0.1", port=8000, reload=True)