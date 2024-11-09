from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from django.forms import 


@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    if username == 'user' and password == "123":
        
    print(username, password)
    user = authenticate(request, username=username, password=password)
    print("56546", user)
    
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    else:
        return Response({"error": "Invalid credentials"}, status=400)
