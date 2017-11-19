---
title: django_form_validation
date: 2017-11-19 12:29:15
tags: 장고
---

```python
class CommentForm(forms.Form):
    def clean_message(self):
        return self.cleaned_data.get('message', '').strip()

form = CommentForm(request.POST)
if form.is_valid():
    message = request.POST['message']
    comment = Comment(message =message)
    comment.save()
    
    return redirect(post)
    
form = CommentForm(request.POST)
if form.is_valid():
    message = form.cleaned_data['message']
    comment = Comment(message =message)
    comment.save()
    
    return redirect(post)    
    
```

>1. form.is_valid()를 호출한다
>2. form.full_clean()을 호출한다.
>3. 필드별 유효성 검사 수행하여 필드별 에러를 체크한다.
>4. 특정 필드.clean()을 통해 Form/Model Field validators 수행한다.
>5. form.clean_특정필드()
>6. form.clean() 호출하여 다수 필드에 대한 에러 체크
>7. 에러가 있으면 False 리턴 없었으면 True 리턴

###Form에서 제공하는 2가지 유효성 검사

1) validator 함수를 통한 유효성 검사
    1. 값이 원하는 조건에 맞지 않을 때
    2. 리턴 값을 쓰지 않음
2) Form 클래스 내 clean 멤버함수를 통한 유효성 검사 및 값 변경
    1. 값이 원하는 조건에 맞지 않을 때 예외발생
    2. 리턴 값을 통해 값 변환


### 언제 validators를 쓰고, 언제 clean을 쓸까?

1) validators는 모델에 정의해라, ModelForm을 통해서 validators 정보를 같이 가져올 수 있다.
2) clean을 언제 쓰는가
    1. 특정 Form에서 1회성 유효성 검사 루틴이 필요할 때
    2. 다수 필드 값을 묶어서 유효성 검사가 필요할 때
    3. 필드 값을 변경할 필요가 있을 때 : validator를 통해서는 값을 변경 할 수 없다. 값의 조건만 체크가능하다.