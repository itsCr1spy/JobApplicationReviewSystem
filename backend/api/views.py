from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from api.serializer import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .serializer import CandidateSerializer
from .models import Candidate

# Create your views here.
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulations {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def overview(request):
	candidate_urls = {
		'List':'/candidate-list',
		'Detail':'/candidate-detail/<str:pk>',
		'Add':'/candidate-add/',
		'Update':'/candidate-update/<str:pk>/',
	}
	return Response(candidate_urls)

@api_view(['GET'])
def candidateList(request):
	candidates = Candidate.objects.all().order_by('-id')
	serializer = CandidateSerializer(candidates, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def candidateDetail(request, pk):
	candidates = Candidate.objects.get(id=pk)
	serializer = CandidateSerializer(candidates, many=False)
	return Response(serializer.data)


@api_view(['POST'])
def candidateAdd(request):
	serializer = CandidateSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def candidateUpdate(request, pk):
	candidate = Candidate.objects.get(id=pk)
	serializer = CandidateSerializer(instance=candidate, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)
