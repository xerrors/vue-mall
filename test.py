a = {
    '苹果':['Apple', 'iPhone 11', 'iPhone 11 pro', 'iPhone 11 pro max', 'iPhone XR', 'iPhone XS', 'iPhone XS Max', 'iPhone X', 'iPhone8', 'iPhone8 plus', 'iPhone7 plus'],
    '华为':['Huawei', 'Mate30', 'Mate30 Pro', 'Mate30 Pro 5G', 'P30', 'P30 Pro', 'MateX', 'Mate20', 'Mate20 Pro', 'Mate20X', 'Mate20X 5G'],
    'OPPO':['OPPO', 'Reno 2', 'Reno 2Z', 'Reno Ace', 'Reno', 'FindX', 'R17 Pro', 'R17', 'R15', 'K3', 'Find 7'],
    '小米':['XiaoMi', '9 Pro', '9', 'CC9 Pro', 'CC9', 'Redmi K20', 'Redmi K20 Pro', '8', '8 SE', 'Mix 3', 'Mix 3 5G'],
    'Vivo':['Vivo', 'iQOO Pro', 'iQOO', 'iQOO Neo', 'Nex 3', 'X27', 'X27 Pro', 'S5', 'Z5', 'Z5x', 'Y7s']
}

sisd = 'brands: ['
for (title, models) in a.items():
    sisd += '{\n  label: ' + "'" + title + "',\n"
    sisd += '  value: ' + "'" + models[0] + "',\n"
    sisd += '  models: [\n'
    for item in models[1:]:
        sisd += ' {\n      label: ' + "'" + title + ' ' + item + "',\n"
        sisd += '      value: ' + "'" + models[0] + ' ' + item + "'\n    },"
    sisd += '  ]\n}, '
sisd += "]"

print(sisd)
