from django.contrib import admin
from .models import Categoria, Lugar, Valoracion

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre')

@admin.register(Lugar)
class LugarAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'categoria', 'imagen_url')
    search_fields = ('nombre',)
    list_filter = ('categoria',)

@admin.register(Valoracion)
class ValoracionAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'lugar', 'puntuacion', 'fecha')