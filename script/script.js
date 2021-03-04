$(document).ready(function () {
    $.validator.addMethod('regexp', function (value, element, params) {
        var expression = new RegExp(params);
        return this.optional(element) || expression.test(value);
    }),
    $("#register_form").validate({
        rules:
        {
            namer:
            {
                required: true,
                minlength: 2,             
            },

            sernamer:
            {
                required: true,
                minlength: 2,             
            },

            password:
            {
                required: true,
                minlength: 4,
                maxlength: 10,
                regexp: /^[0-9a-zA-Z-_.]+$/,
            },

            confirm_password:
            {
                required: true,
                equalTo: "#password"

            },

            mail: {
                required: true,
                email: true
            },

            date: {
                required: true,
                regexp: /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/,
            },

            number: {
                required: true,
                regexp: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
            },
       
        },
        messages:
        {
            namer:
            {
                required:"не заполнено"                      
            },

            sernamer:
            {
                required:"не заполнено"                      
            },

            password:
            {
                required:"введите пароль",
                minlength:"слишком короткий",
                maxlength:"слишком длинный",
                regexp:"Только английские буквы и символы"
            },

            confirm_password:
            {
                required: "повторите пароль",
                equalTo: "Пароли не совпадают"

            },

            mail:
            {
                required:"введите email",
                email:"неправильный email"
            },
            
            date: {
                required: "не заполнено",
                regexp: "неправильный формат",
            },

            number: {
                required:"не заполнено",
                regexp: "неправильный формат номера"
            },
        },
    });
});

