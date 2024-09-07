from django.http import JsonResponse
from django.contrib.auth import authenticate, login as auth_login
from django.views.decorators.csrf import csrf_exempt
from members.models import Member
import json



@csrf_exempt
def login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('username')
            password = data.get('password')
            user = Member.objects.filter(email=email, password=password).first()
            if user is not None:
                auth_login(request, user)
                return JsonResponse({'status': 'success', 'message': 'Login successful'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Invalid email or password'}, status=401)
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON'}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)



@csrf_exempt
def create(request):
    try:
        data = json.loads(request.body)
        mail = data.get('email')
        password = data.get('password')
        member = Member.objects.create(email=mail, password=password)
        return JsonResponse({'status': 'success', 'message': 'Login successful'})
    except Exception as e:
        return JsonResponse({'status':"error",'message':str(e)}, status=400)