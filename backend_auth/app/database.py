
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = 'mssql+pyodbc://sonicfsw:123456789@192.168.0.22:1433/reservation+navigation?driver=ODBC+Driver+17+for+SQL+Server&TrustServerCertificate=yes'
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
