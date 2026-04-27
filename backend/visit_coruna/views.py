from rest_framework import viewsets, permissions
from .models import Categoria, Lugar, Valoracion
from .serializers import CategoriaSerializer, LugarSerializer, ValoracionSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    permission_classes = [permissions.AllowAny]

class LugarViewSet(viewsets.ModelViewSet):
    queryset = Lugar.objects.all()
    serializer_class = LugarSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ValoracionViewSet(viewsets.ModelViewSet):
    queryset = Valoracion.objects.all()
    serializer_class = ValoracionSerializer
    permission_classes = [permissions.IsAuthenticated]