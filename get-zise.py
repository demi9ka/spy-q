from pyperclip import copy

while True:
  try:

    name, value, mn = input(': ').split()
    name, value, mn = name+'-', float(value), float(mn)
    kof = 1920 / value

    result = f'{name}[{mn}px] md:{name}[{round(768/kof*1.2,1)}px] lg:{name}[{round(1024/kof*1.15,1)}px] xl:{name}[{round(1280/kof*1.15,1)}px] 2xl:{name}[{value}px]'
    copy(result)
    print('Скопировано!')
  except Exception:pass