from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse

def main(request):
    return render(request, 'index.html')
