from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen, NoTransition
from kivy.uix.button import Button
from kivy.uix.label import Label
from kivy.uix.image import Image
from kivy.uix.boxlayout import BoxLayout
from kivy.graphics import Color, Rectangle
from kivy.metrics import dp
from kivy.uix.slider import Slider
from kivy.uix.scrollview import ScrollView
from kivy.core.window import Window
from kivy.uix.popup import Popup
from kivy.clock import Clock
from kivy.uix.textinput import TextInput
from kivy.uix.checkbox import CheckBox

pages = []
localizacao = 'ASDSDA'
Partida = 'Aveiro'
Destino = ''
Hora = ''
ticketid = 0
numberoftickets = 0


class HomeScreen(Screen):

    def ajuda_func(self):
        pops = AjudaHomeScreen()
        pops.open()

    def go_to_screen1(self):
        pages.append('1')
        self.manager.current = '1'

    def go_to_screen22(self):
        pages.append('22')
        self.manager.current = '8'

    def go_to_screen21(self):
        pages.append('21')
        self.manager.current = '21'

    def go_to_screen20(self):
        pages.append('20')
        self.manager.current = '20'

    def go_to_screen30(self):
        pages.append('30')
        self.manager.current = '30'


class AjudaHomeScreen(Popup):
    pass


class Screen1(Screen):
    def ajuda_func(self):
        pops = AjudaScreen1()
        pops.open()

    def go_to_screen2(self):
        pages.append('2')
        self.manager.current = '2'

    def go_to_screen3(self):
        pages.append('3')
        self.manager.current = '3'

    def go_to_screen0(self):
        pages.append('0')
        self.manager.current = '0'


class AjudaScreen1(Popup):
    pass


class Screen2(Screen):
    def ajuda_func(self):
        pops = AjudaScreen2()
        pops.open()

    def go_to_screen4(self):
        pages.append('4')
        self.manager.current = '4'

    def go_to_screen0(self):
        pages.append('0')
        self.manager.current = '0'


class AjudaScreen2(Popup):
    pass


class Screen3(Screen):

    def ajuda_func(self):
        pops = AjudaScreen3()
        pops.open()

    def go_to_screen2(self):
        pages.append('2')
        self.manager.current = '2'

    def go_to_screen0(self):
        pages.append('0')
        self.manager.current = '0'


class AjudaScreen3(Popup):
    pass


class Screen4(Screen):

    def ajuda_func(self):
        pops = AjudaScreen4()
        pops.open()

    def go_to_screen10(self):
        pages.append('10')
        self.manager.current = '10'

    def go_to_screen0(self):
        pages.append('0')
        self.manager.current = '0'

    def go_to_screen5(self):
        pages.append('5')
        self.manager.current = '5'


class AjudaScreen4(Popup):
    pass


class Screen5(Screen):
    def ajuda_func(self):
        pops = AjudaScreen5()
        pops.open()

    def go_to_screen6(self):
        pages.append('6')
        self.manager.current = '6'

    def go_to_screen0(self):
        pages.append('0')
        self.manager.current = '0'

    def go_to_screen7(self):
        pages.append('7')
        self.manager.current = '7'


class AjudaScreen5(Popup):
    pass


class Screen6(Screen):
    def ajuda_func(self):
        pops = AjudaScreen6()
        pops.open()

    def go_to_screen7(self):
        pages.append('7')
        self.manager.current = '7'

    def go_to_screen8(self):
        pages.append('8')
        self.manager.current = '8'

    def go_to_screen0(self):
        pages.append('0')
        self.manager.current = '0'


class AjudaScreen6(Popup):
    pass


class Screen7(Screen):
    def ajuda_func(self):
        pops = AjudaScreen7()
        pops.open()

    def go_back(self):
        pages.pop()
        self.manager.current = pages[-1]


class AjudaScreen7(Popup):
    pass


class Screen8(Screen):
    def ajuda_func(self):
        pops = AjudaScreen8()
        pops.open()

    def go_to_screen9(self):
        pages.append('9')
        self.manager.current = '9'

    def go_to_screen0(self):
        pages.append('0')
        self.manager.current = '0'

    def go_to_screen7(self):
        pages.append('7')
        self.manager.current = '7'

    def go_estacao(self):
        pops2 = EstacaoPopup()
        pops2.open()

        Clock.schedule_once(lambda dt: self.go_to_screen0(), 5)


class AjudaScreen8(Popup):
    pass


class EstacaoPopup(Popup):
    pass


class Screen9(Screen):
    def ajuda_func(self):
        pops = AjudaScreen9()
        pops.open()

    def go_pagar(self):
        pops3 = PagarPopup()
        pops3.open()

        Clock.schedule_once(lambda dt: self.go_to_screen0(), 5)

    def go_to_screen0(self):
        pages.append('0')
        self.manager.current = '0'


class AjudaScreen9(Popup):
    pass


class PagarPopup(Popup):
    pass


class Screen10(Screen):
    def ajuda_func(self):
        pops = AjudaScreen10()
        pops.open()

    def go_aplicar(self):
        pages.append('4')
        self.manager.current = '4'

    def go_back(self):
        pages.pop()
        self.manager.current = pages[-1]


class AjudaScreen10(Popup):
    pass


class Screen12(Screen):
    def ajuda_func(self):
        pops = AjudaScreen12()
        pops.open()

    def go_to_screen13(self):
        pages.append('13')
        self.manager.current = '13'

    def go_to_screen0(self):
        pages.append('0')
        self.manager.current = '0'


class AjudaScreen12(Popup):
    pass


class Screen20(Screen):
    def go_to_screen23(self):
        pages.append('23')
        self.manager.current = '23'

    def go_back(self):
        pages.pop()
        self.manager.current = pages[-1]


class ViajarSeniorApp(App):
    Window.clearcolor = (0, 0.5, 1, 1)
    Window.size = (600, 1200)

    def build(self):
        sm = ScreenManager(transition=NoTransition())
        pages.append('0')
        sm.add_widget(HomeScreen(name='0'))
        sm.add_widget(Screen1(name='1'))
        sm.add_widget(Screen2(name='2'))
        sm.add_widget(Screen3(name='3'))
        sm.add_widget(Screen4(name='4'))
        sm.add_widget(Screen5(name='5'))
        sm.add_widget(Screen6(name='6'))
        sm.add_widget(Screen7(name='7'))
        sm.add_widget(Screen8(name='8'))
        sm.add_widget(Screen9(name='9'))
        sm.add_widget(Screen10(name='10'))
        sm.add_widget(Screen20(name='20'))

        """sm.add_widget(Screen2(name='2'))
                sm.add_widget(Screen3(name='3'))
                sm.add_widget(Screen4(name='4'))
                sm.add_widget(Screen5(name='5'))
                sm.add_widget(Screen6(name='6'))
                sm.add_widget(Screen7a(name='7a'))
                sm.add_widget(Screen7b(name='7b'))
                sm.add_widget(Screen8(name='8'))
                sm.add_widget(Screen9(name='9'))
                sm.add_widget(Screen10(name='10'))
                sm.add_widget(Screen11(name='11'))
                sm.add_widget(Screen12(name='12'))
                sm.add_widget(Screen13(name='13'))"""

        return sm


if __name__ == '__main__':
    ViajarSeniorApp().run()