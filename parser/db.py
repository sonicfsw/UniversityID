from pymongo import MongoClient
from config import DB_URI, DB_NAME, COLLECTION_NAME

client = MongoClient(DB_URI)
db = client[DB_NAME]
collection = db[COLLECTION_NAME]

def save_schedule(group, schedule):
    collection.replace_one({'group': group}, {'group': group, 'schedule': schedule}, upsert=True)

def get_schedule(group):
    return collection.find_one({'group': group})
#let'go