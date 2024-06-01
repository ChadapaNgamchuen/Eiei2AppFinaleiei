# app_apis/serializers.py
from rest_framework import serializers
from .models import DataTest
class DataSerializer(serializers.ModelSerializer):
   class Meta:
       fields = (
           'id',
           'name',
           'description',
       )
       model = DataTest
