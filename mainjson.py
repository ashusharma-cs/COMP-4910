import csv
import json

# Open the CSV file and read its contents
with open('data.csv', newline='', encoding='utf-8') as csvfile:
    csvreader = csv.DictReader(csvfile)
    rows = list(csvreader)

# Convert the CSV data into an array of objects
data = []
for row in rows:
    item = {}
    for field in row:
        item[field] = row[field]
    data.append(item)

# Write the array of objects to a JSON file
with open('relevant_tweets.json', 'w') as jsonfile:
    json.dump(data, jsonfile)