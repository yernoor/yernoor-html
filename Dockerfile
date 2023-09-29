FROM python:3.8-slim

WORKDIR /app

COPY app/app.py /app/app.py

RUN pip install -r fastapi uvicorn

EXPOSE 8080

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8080"]