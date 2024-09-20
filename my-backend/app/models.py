from django.db import models


class User_Model(models.Model):
    class Meta:
        db_table = "User"

    user_name = models.CharField(
        verbose_name="name",
        max_length=128,
        default="",
    )

    user_email = models.CharField(
        verbose_name="email",
        max_length=128,
        default="",
    )
    
    user_password = models.CharField(
        verbose_name="password",
        max_length=128,
        default="",
    )

    def __str__(self):
        return self.user_id
