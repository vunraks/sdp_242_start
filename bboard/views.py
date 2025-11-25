from django.shortcuts import render, get_object_or_404
from .models import Bb, Rubric

def index(request):
    bbs = Bb.objects.all()
    rubrics = Rubric.objects.all()
    return render(request, 'index.html', {'bbs': bbs, 'rubrics': rubrics})

def by_rubric(request, rubric_id):
    bbs = Bb.objects.filter(rubric=rubric_id)
    rubrics = Rubric.objects.all()
    current_rubric = get_object_or_404(Rubric, pk=rubric_id)
    return render(request, 'by_rubric.html', {
        'bbs': bbs,
        'rubrics': rubrics,
        'current_rubric': current_rubric
    })

def login_view(request):
    return render(request, 'login.html')