import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=" http://localhost:5173/",
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],
)


@app.get("/api/health")
def healthCheck():
    return {"Status": "200", "Health": "Good"}
