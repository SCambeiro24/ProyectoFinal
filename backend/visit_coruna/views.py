from rest_framework import viewsets, permissions
from .models import Categoria, Lugar, Valoracion
from .serializers import CategoriaSerializer, LugarSerializer, ValoracionSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    permission_classes = [permissions.AllowAny]


class LugarViewSet(viewsets.ModelViewSet):
    serializer_class = LugarSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def get_queryset(self):
        queryset = Lugar.objects.all()
        categoria_param = self.request.query_params.get('categoria', None)
        if categoria_param is not None:
            queryset = queryset.filter(categoria__nombre=categoria_param)
        return queryset

class ValoracionViewSet(viewsets.ModelViewSet):
    queryset = Valoracion.objects.all()
    serializer_class = ValoracionSerializer
    permission_classes = [permissions.IsAuthenticated]