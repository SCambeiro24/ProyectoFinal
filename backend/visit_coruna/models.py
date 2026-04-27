from django.db import models
from django.contrib.auth.models import User


class Categoria(models.Model):
    nombre = models.CharField(max_length=100, unique=True)

    class Meta:
        verbose_name_plural = "Categorías"

    def __str__(self):
        return self.nombre

class Lugar(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    imagen_url = models.CharField(max_length=255)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, related_name='lugares')
    usuarios_que_valoran = models.ManyToManyField(User, through='Valoracion')

    class Meta:
        verbose_name_plural = "Lugares"

    def __str__(self):
        return self.nombre


class Valoracion(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    lugar = models.ForeignKey(Lugar, on_delete=models.CASCADE)
    puntuacion = models.IntegerField(default=5)
    comentario = models.TextField(blank=True, null=True)
    fecha = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('usuario', 'lugar')
        verbose_name_plural = "Valoraciones"