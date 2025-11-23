from django.urls import path
from .views import index, list_view, card_view, todos_view

urlpatterns = [
    path('', index, name='index'),
    path('list/', list_view, name='list'),
    path('card/', card_view, name='card'),
    path('todos/', todos_view, name='todos'),
    path('card/<int:id>/', card_view, name='card'),
]
