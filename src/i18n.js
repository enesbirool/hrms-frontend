import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
    resources:{
        en:{
            translations:{
                'Sign Up':'Sign Up',
                'Password mismatch':'Password mismatch',
                "Create your account. It's free and only takes a minute.":"Create your account. It's free and only takes a minute.",
                "Username":"Username",
                "Home":"Home",
                "Contact Us":"Contact Us",
                "About":"About",
                "Display Name":"Display Name",
                "Password":"Password",
                "Hello, How Can We Help You?":"Hello, How Can We Help You?",
                "REPasword":"REPassword",
                "Register":"Register",
                "New to us?":"New to us?",
                "Please Sign In":"Please Sign In",
                "Login":"Login",
                "Now":"Now",
                "Waiting":"Waiting",
                "Send Message":"Send Message",
                "E-mail":"E-mail",
                "Logout":"Logout",
                "Log-in to your account":"Log-in to your account",
                "Human Resource Management System":"Human Resource Management System",
                "“If there's a facility, when you're starting to bring it to life. This doesn't require you to think right away. One small step each day will start the movement.”":"“If there's a facility, when you're starting to bring it to life. This doesn't require you to think right away. One small step each day will start the movement.”",
                "Don't waste your time, Join us and find Work/Company Harmony!!!":"Don't waste your time, Join us and find Work/Company Harmony!!!"
            }
        },
        tr:{
            translations:{
                'Sign Up':'Kayıt Ol',
                'Password mismatch':'Şifreler Uyuşmuyor',
                "Create your account. It's free and only takes a minute.":"Hesabını oluştur. Sadece bir dakika sürer ve ÜCRETSİZDİR...",
                "Username":"Kullanıcı Adı",
                "Display Name":"Tercih Edilen İsim",
                "Password":"Şifre",
                "REPasword":"Şifreyi Tekrar Giriniz.",
                "Please Sign In":"Lütfen Giriş Yapınız",
                "Login":"Giriş",
                "Hello, How Can We Help You?":"Merhaba Size Nasıl Yardımcı Olabiliriz?",
                "Now":"Şimdi",
                "Waiting":"Bekliyor",
                "Send Message":"Mesaj Gönder",
                "New to us?":"Üye Olmak İster misin?",
                "E-mail":"Mail adresi",
                "Home":"Ana Sayfa",
                "Contact Us":"İletişim",
                "About":"Hakkımızda",
                "Log-in to your account":"Giriş Ekranına Hoşgeldiniz",
                "Register":"Kayıt Ol",
                "Logout":"Çıkış",
                "Human Resource Management System":"İnsan Kaynakları Yönetim Sistemi",
                "“If there's a facility, when you're starting to bring it to life. This doesn't require you to think right away. One small step each day will start the movement.”":"“Eğer bir tesistez varsa onu bir hayata geçirmeye başlarken. Bu hemen düşünmenizi gerektirmiyor. Her gün atılacak küçük bir adım hareketi başlatacak.”",
                "Don't waste your time, Join us and find Work/Company Harmony!!!":"Vakit Harcama Sende Bize Katıl ve İş/Şirket Uyumunu yakala!!!"
            }
        }
    },
    fallbackLng:"tr",
    ns:["translations"],
    defaultNS:"translations",
    keySeparator:false,
    interpolation:{
        escapeValue:false,
        formatSeparator:","
    },
    react:{
        wait:true
    }
})

export default i18n;