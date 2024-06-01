from django.shortcuts import render
from rest_framework import generics
from .models import DataTest
from .serializers import DataSerializer

class ListData(generics.ListCreateAPIView):
   queryset = DataTest.objects.all()
   serializer_class = DataSerializer
  
class Detail(generics.RetrieveUpdateDestroyAPIView):
   queryset = DataTest.objects.all()
   serializer_class = DataSerializer
