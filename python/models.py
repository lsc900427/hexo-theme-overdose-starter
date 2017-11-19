class GameUser(models.Model):
    server_name = models.CharField(max_length=10,
                                   choices = (
                                       (A, 'Aserver'),
                                       (B, 'Bserver'),
                                       (C, 'Cserver'),
                                   ))
    username = models.CharField(max_length=20, validators=[MinLengthValidator(3)])

    class Meta:
        unique_together = [
            ('server_name', 'username')
        ]



# model

class Post(models.Model):
    user_agent = models.CharField(max_length=20)


#form.py

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content', 'user_agent']





var dom = docuemnt.getElementById('{{ form.user_agent.id_for_label }}')
dom.value = navigator.userAgent

