import requests
from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def list_view(request):
    # Сортированный список (локальный)
    items = [
        {"title": "Категория A", "children": ["Товар 1", "Товар 2"]},
        {"title": "Категория B", "children": ["Товар 3"]},
    ]
    return render(request, "list.html", {"items": items})

def card_view(request):
    card = {
        "title": "Пример карточки",
        "description": "Описание объекта, полученного локально."
    }
    return render(request, "card.html", {"card": card})

def todos_view(request):
    url = "https://jsonplaceholder.typicode.com/todos"
    response = requests.get(url)
    todos = response.json()

    return render(request, "todos.html", {"todos": todos})
