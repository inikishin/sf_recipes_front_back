from django.db import models

class Category(models.Model):
    code = models.CharField(max_length=20, unique=True)
    img_scr = models.TextField(null=True, blank=True)
    fullname = models.TextField(unique=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.fullname

class Recipe(models.Model):
    fullname = models.TextField(unique=True)
    img_scr = models.TextField(null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField(null=True, blank=True)
    content = models.TextField()
    likes = models.IntegerField(default=0)

    def liked(self):
        self.likes += 1
        self.save()

    def __str__(self):
        return self.fullname
