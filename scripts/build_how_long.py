# -*- coding: utf-8 -*-
"""Generate how-long.ja.json and how-long.zh-cn.json from how-long.json."""

import json
import re
from pathlib import Path

FOOD_JA = {
    'Alfredo Sauce': 'アルフレッドソース',
    'Almond Butter': 'アーモンドバター',
    'Almond Milk': 'アーモンドミルク',
    'Apples': 'りんご',
    'Avocado': 'アボカド',
    'Baba Ganoush': 'ババガヌーシュ（ナスのディップ）',
    'Baby Food': 'ベビーフード（離乳食）',
    'Bacon': 'ベーコン',
    'Bananas': 'バナナ',
    'Bbq Sauce': 'バーベキューソース',
    'Bell Peppers': 'パプリカ・ピーマン',
    'Berries': 'ベリー類（ミックスベリー）',
    'Blue Cheese': 'ブルーチーズ',
    'Blueberries': 'ブルーベリー',
    'Bone Broth': 'ボーンブロス（骨だしスープ）',
    'Bread': '食パン・パン',
    'Breast Milk': '母乳',
    'Brie Cheese': 'ブリーチーズ',
    'Broccoli': 'ブロッコリー',
    'Broth': '出汁・ブロス（スープストック）',
    'Brownies': 'ブラウニー',
    'Burritos': 'ブリトー',
    'Butter': 'バター',
    'Butter Long': 'バター（長期保存）',
    'Caesar Dressing': 'シーザードレッシング',
    'Cake': 'ケーキ',
    'Canned Tuna': 'ツナ缶（開封後）',
    'Cantaloupe': 'カンタロープメロン',
    'Carrots': 'にんじん',
    'Casserole Meals': 'キャセロール（オーブン煮込み料理）',
    'Celery': 'セロリ',
    'Cheddar Cheese': 'チェダーチーズ',
    'Cheese': 'チーズ',
    'Cherries': 'さくらんぼ・チェリー',
    'Chicken': '鶏肉（生の鶏肉）',
    'Chili': 'チリコンカン（チリビーンズ）',
    'Coconut Milk': 'ココナッツミルク',
    'Cod Fish': 'タラ（生の白身魚）',
    'Coffee Beans': 'コーヒー豆',
    'Cold Cuts': 'コールドカット（スライスハム）',
    'Cooked Bacon': '調理済みベーコン（焼きベーコン）',
    'Cooked Beans': '茹でた豆類（煮豆）',
    'Cooked Beef': '調理済み牛肉',
    'Cooked Chicken': '調理済み鶏肉',
    'Cooked Eggs': '調理済み卵料理',
    'Cooked Fish': '調理済み魚料理',
    'Cooked Ham': '調理済みハム',
    'Cooked Lamb': '調理済み羊肉（ラム肉）',
    'Cooked Lentils': '煮たレンズ豆',
    'Cooked Oatmeal': 'オートミール粥（調理済み）',
    'Cooked Pasta': '茹でたパスタ',
    'Cooked Pork': '調理済み豚肉',
    'Cooked Pork Chops': '調理済みポークチョップ',
    'Cooked Potatoes': 'ゆでじゃがいも',
    'Cooked Quinoa': '炊いたキヌア',
    'Cooked Rice': '炊いたご飯（白米）',
    'Cooked Salmon': '調理済みサーモン（焼き鮭）',
    'Cooked Shrimp': '茹でエビ・調理済みエビ',
    'Cooked Tofu': '調理済み豆腐',
    'Cooked Turkey': '調理済み七面鳥（ターキー）',
    'Cooked Vegetables': '温野菜・茹で野菜',
    'Cookie': 'クッキー',
    'Cookie Dough': 'クッキードウ（生クッキー生地）',
    'Corn': 'とうもろこし',
    'Cottage Cheese': 'カッテージチーズ',
    'Crab Meat': 'カニ肉',
    'Cream Cheese': 'クリームチーズ',
    'Cream Cheese Opened': 'クリームチーズ（開封後）',
    'Cucumbers': 'きゅうり',
    'Cut Avocado': 'カットアボカド',
    'Cut Pineapple': 'カットパイナップル',
    'Cut Watermelon': 'カットすいか',
    'Deli Meat': 'デリミート（量り売りハム）',
    'Deli Turkey': 'ターキーハム（デリスライス）',
    'Duck': '鴨肉（生の合鴨肉）',
    'Eggs': '生卵',
    'Empanadas': 'エンパナーダ（包み焼きパイ）',
    'Enchiladas': 'エンチラーダ',
    'Feta Cheese': 'フェタチーズ',
    'Fish Sauce': 'ナンプラー・魚醤',
    'Fresh Gnocchi': '生ニョッキ',
    'Fresh Juice': '生搾りフレッシュジュース',
    'Fresh Pasta': '生パスタ',
    'Garlic': 'にんにく',
    'Goat Cheese': 'シェーブルチーズ（山羊乳チーズ）',
    'Grapes': 'ぶどう',
    'Gravy': 'グレイビーソース',
    'Ground Beef': '牛ひき肉',
    'Ground Lamb': '羊ひき肉',
    'Ground Pork': '豚ひき肉',
    'Ground Turkey': '七面鳥ひき肉',
    'Guacamole': 'ワカモレ（アボカドディップ）',
    'Ham': 'ハム（塊・ブロック）',
    'Hard Boiled Eggs': 'ゆで卵（固ゆで卵）',
    'Heavy Cream': '生クリーム（純生クリーム）',
    'Hoisin Sauce': '海鮮醤（ホイシンソース）',
    'Hollandaise Sauce': 'オランデーズソース',
    'Honey': 'はちみつ',
    'Hot Dogs': 'ホットドッグ用ソーセージ',
    'Hot Sauce': 'ホットソース（チリソース）',
    'Hummus': 'フムス（ひよこ豆ペースト）',
    'Ice Cream': 'アイスクリーム',
    'Jam': 'ジャム',
    'Jelly': 'ゼリー・フルーツジェリー',
    'Ketchup': 'トマトケチャップ',
    'Kiwi': 'キウイフルーツ',
    'Lamb Chops': 'ラムチョップ（骨付き子羊肉）',
    'Lasagna': 'ラザニア',
    'Leftover Chinese Food': '中華料理の残り物',
    'Leftover Pizza': 'ピザの残り',
    'Lemons': 'レモン',
    'Lettuce': 'レタス',
    'Limes': 'ライム',
    'Lobster Meat': 'ロブスター肉',
    'Mac And Cheese': 'マカロニチーズ（マック＆チーズ）',
    'Mango': 'マンゴー',
    'Mangoes': 'マンゴー',
    'Maple Syrup': 'メープルシロップ',
    'Marinara Sauce': 'マリナーラソース（トマトソース）',
    'Mayo': 'マヨネーズ',
    'Meatballs': 'ミートボール',
    'Meatloaf': 'ミートローフ',
    'Milk': '牛乳',
    'Mozzarella': 'モッツァレラチーズ',
    'Muffins': 'マフィン',
    'Mushrooms': 'マッシュルーム・きのこ類',
    'Mustard': 'マスタード（からし）',
    'Naan Bread': 'ナン（平焼きパン）',
    'Nectarines': 'ネクタリン',
    'Nutella': 'ヌテラ（ヘーゼルナッツスプレッド）',
    'Olive Oil': 'オリーブオイル',
    'Onions': '玉ねぎ',
    'Opened Beer': '開封後のビール',
    'Opened Pesto': '開封後のジェノベーゼソース',
    'Opened Wine': '開封後のワイン',
    'Orange Juice': 'オレンジジュース',
    'Oranges': 'オレンジ',
    'Oyster Sauce': 'オイスターソース',
    'Pancakes': 'パンケーキ',
    'Pancakes Frozen': '冷凍パンケーキ',
    'Papaya': 'パパイヤ',
    'Parmesan': 'パルメザンチーズ',
    'Peaches': '桃（白桃・黄桃）',
    'Pears': '洋梨・和梨',
    'Peas': 'えんどう豆・グリーンピース',
    'Pesto': 'ジェノベーゼペースト（ペスト）',
    'Pie': 'パイ（フルーツパイ等）',
    'Pie Crust Dough': 'パイシート・パイ生地',
    'Pineapple': 'パイナップル',
    'Pita Bread': 'ピタパン',
    'Pizza': 'ピザ',
    'Pizza Dough': 'ピザ生地（生生地）',
    'Plums': 'すもも・プラム',
    'Pork Chops': 'ポークチョップ（生の豚ロース肉）',
    'Pot Pies': 'ポットパイ',
    'Potatoes': 'じゃがいも',
    'Provolone Cheese': 'プロボローネチーズ',
    'Pulled Pork': 'プルドポーク（裂き豚肉料理）',
    'Quiche': 'キッシュ',
    'Ranch Dressing': 'ランチドレッシング',
    'Raspberries': 'ラズベリー',
    'Ricotta Cheese': 'リコッタチーズ',
    'Salad Dressing': 'サラダドレッシング',
    'Salmon': 'サーモン（生の生鮭）',
    'Salsa': 'サルサソース',
    'Scallops': 'ホタテ貝柱（生）',
    'Shrimp': '生エビ',
    'Smoked Salmon': 'スモークサーモン',
    'Smoothie': 'スムージー',
    'Soft Cheese': 'ソフトチーズ（軟質チーズ）',
    'Soup': 'スープ',
    'Soup Dumplings': '小籠包（スープ入り小籠包）',
    'Sour Cream': 'サワークリーム',
    'Sour Cream Opened': 'サワークリーム（開封後）',
    'Sourdough Bread': 'サワードウブレッド（天然酵母パン）',
    'Spinach': 'ほうれん草',
    'Sriracha': 'スリラッチャソース',
    'Strawberries': 'いちご',
    'Stuffed Peppers': 'パプリカの肉詰め',
    'Swiss Cheese': 'スイスチーズ',
    'Tahini': 'タヒニ（白ごまペースト）',
    'Tamales': 'タマーレス（トウモロコシ包み蒸し）',
    'Tempeh': 'テンペ（発酵大豆ブロック）',
    'Teriyaki Sauce': '照り焼きのタレ',
    'Tilapia Fish': 'ティラピア（白身魚）',
    'Tofu': '豆腐',
    'Tomatoes': 'トマト',
    'Tortillas': 'トルティーヤ',
    'Tuna Steak': 'マグロの切り身（ツナステーキ）',
    'Turkey': '七面鳥肉（生のターキー）',
    'Tzatziki': 'ツァツィキ（ギリシャ風ヨーグルトソース）',
    'Waffles': 'ワッフル',
    'Waffles Frozen': '冷凍ワッフル',
    'Watermelon': 'すいか',
    'Wonton Wrappers': 'ワンタンの皮',
    'Yogurt': 'ヨーグルト'
}

FOOD_ZH = {
    'Alfredo Sauce': '阿尔弗雷多白酱',
    'Almond Butter': '杏仁酱（杏仁黄油）',
    'Almond Milk': '杏仁奶（巴旦木奶）',
    'Apples': '苹果',
    'Avocado': '牛油果（鳄梨）',
    'Baba Ganoush': '烤茄子泥酱（Baba Ganoush）',
    'Baby Food': '婴幼儿辅食泥',
    'Bacon': '培根（烟熏培根）',
    'Bananas': '香蕉',
    'Bbq Sauce': '烧烤酱（BBQ酱）',
    'Bell Peppers': '彩椒（甜椒）',
    'Berries': '浆果杂莓',
    'Blue Cheese': '蓝纹奶酪（蓝芝士）',
    'Blueberries': '蓝莓',
    'Bone Broth': '骨汤（高汤原汤）',
    'Bread': '面包',
    'Breast Milk': '母乳',
    'Brie Cheese': '布里奶酪（白霉芝士）',
    'Broccoli': '西兰花（青花菜）',
    'Broth': '清高汤（肉汤/清汤）',
    'Brownies': '巧克力布朗尼',
    'Burritos': '墨西哥卷饼（卷饼快餐）',
    'Butter': '黄油',
    'Butter Long': '黄油（长期冷冻存储）',
    'Caesar Dressing': '凯撒沙拉酱',
    'Cake': '蛋糕',
    'Canned Tuna': '罐头金枪鱼（开封后）',
    'Cantaloupe': '橙肉哈密瓜',
    'Carrots': '胡萝卜',
    'Casserole Meals': '砂锅炖菜（焗烤料理）',
    'Celery': '芹菜（西芹）',
    'Cheddar Cheese': '切达奶酪',
    'Cheese': '奶酪（芝士）',
    'Cherries': '车厘子（大樱桃）',
    'Chicken': '生鸡肉',
    'Chili': '美式辣豆肉酱（Chili）',
    'Coconut Milk': '椰浆（椰奶）',
    'Cod Fish': '鳕鱼块（生鱼肉）',
    'Coffee Beans': '咖啡豆',
    'Cold Cuts': '冷切熟肉片（熟食切片肉）',
    'Cooked Bacon': '熟培根（煎熟培根片）',
    'Cooked Beans': '熟豆类（煮熟豆子）',
    'Cooked Beef': '熟牛肉',
    'Cooked Chicken': '熟鸡肉',
    'Cooked Eggs': '熟蛋料理（炒蛋/水波蛋）',
    'Cooked Fish': '熟鱼（煎鱼/烤鱼片）',
    'Cooked Ham': '熟火腿肉',
    'Cooked Lamb': '熟羊肉',
    'Cooked Lentils': '熟扁豆',
    'Cooked Oatmeal': '熟燕麦粥',
    'Cooked Pasta': '熟意面',
    'Cooked Pork': '熟猪肉',
    'Cooked Pork Chops': '熟猪排',
    'Cooked Potatoes': '熟土豆（煮土豆/烤土豆）',
    'Cooked Quinoa': '熟藜麦',
    'Cooked Rice': '熟米饭',
    'Cooked Salmon': '熟三文鱼',
    'Cooked Shrimp': '熟虾仁（白灼虾）',
    'Cooked Tofu': '熟豆腐料理',
    'Cooked Turkey': '熟火鸡肉',
    'Cooked Vegetables': '熟蔬菜（炒菜/水煮菜）',
    'Cookie': '饼干（曲奇）',
    'Cookie Dough': '生曲奇面团（生饼干糊）',
    'Corn': '玉米（甜玉米）',
    'Cottage Cheese': '卡特吉奶酪（茅屋芝士）',
    'Crab Meat': '蟹肉（生熟蟹肉）',
    'Cream Cheese': '奶油奶酪（忌廉芝士）',
    'Cream Cheese Opened': '奶油奶酪（已开封）',
    'Cucumbers': '黄瓜',
    'Cut Avocado': '切开的牛油果',
    'Cut Pineapple': '切开的菠萝块',
    'Cut Watermelon': '切开的西瓜块',
    'Deli Meat': '熟食火腿切片（熟食冷肉）',
    'Deli Turkey': '火鸡胸肉切片',
    'Duck': '生鸭肉',
    'Eggs': '生鸡蛋',
    'Empanadas': '恩帕纳达肉馅饼',
    'Enchiladas': '墨西哥辣酱玉米卷',
    'Feta Cheese': '菲达羊奶酪',
    'Fish Sauce': '鱼露',
    'Fresh Gnocchi': '新鲜土豆面疙瘩（生玉棋）',
    'Fresh Juice': '鲜榨果汁',
    'Fresh Pasta': '新鲜生意大利面',
    'Garlic': '大蒜',
    'Goat Cheese': '山羊奶酪',
    'Grapes': '葡萄（提子）',
    'Gravy': '肉汁肉汤酱（Gravy）',
    'Ground Beef': '生牛肉馅（碎牛肉）',
    'Ground Lamb': '生羊肉馅',
    'Ground Pork': '生猪肉馅',
    'Ground Turkey': '生火鸡肉馅',
    'Guacamole': '鳄梨酱（牛油果酱）',
    'Ham': '火腿',
    'Hard Boiled Eggs': '熟全蛋（水煮蛋）',
    'Heavy Cream': '淡奶油（重奶油）',
    'Hoisin Sauce': '海鲜酱',
    'Hollandaise Sauce': '荷兰酱（蛋黄黄油酱）',
    'Honey': '纯蜂蜜',
    'Hot Dogs': '热狗肠（法兰克福香肠）',
    'Hot Sauce': '辣椒酱（美式辣酱）',
    'Hummus': '鹰嘴豆泥（Hummus）',
    'Ice Cream': '冰淇淋',
    'Jam': '果酱',
    'Jelly': '水果果冻（明胶果冻）',
    'Ketchup': '番茄酱',
    'Kiwi': '猕猴桃（奇异果）',
    'Lamb Chops': '羊排（生羊小排）',
    'Lasagna': '意式千层面',
    'Leftover Chinese Food': '吃剩的外卖中餐（炒饭/炒菜）',
    'Leftover Pizza': '吃剩的披萨',
    'Lemons': '柠檬',
    'Lettuce': '生菜',
    'Limes': '青柠（酸橙）',
    'Lobster Meat': '龙虾肉',
    'Mac And Cheese': '芝士焗通心粉（Mac and Cheese）',
    'Mango': '芒果',
    'Mangoes': '芒果',
    'Maple Syrup': '纯枫糖浆',
    'Marinara Sauce': '意式番茄红酱（马利纳拉酱）',
    'Mayo': '蛋黄酱（美乃滋）',
    'Meatballs': '肉丸（牛肉丸/肉圆）',
    'Meatloaf': '美式肉糕（烤肉糕）',
    'Milk': '鲜牛奶',
    'Mozzarella': '马苏里拉奶酪（莫扎里拉）',
    'Muffins': '玛芬蛋糕（松饼）',
    'Mushrooms': '鲜蘑菇（菌菇类）',
    'Mustard': '芥末酱（黄芥末）',
    'Naan Bread': '印度馕饼（烤饼）',
    'Nectarines': '油桃',
    'Nutella': '意式榛子可可酱（Nutella）',
    'Olive Oil': '橄榄油',
    'Onions': '洋葱',
    'Opened Beer': '喝剩下的啤酒（已开罐/开瓶）',
    'Opened Pesto': '开封的青酱（罗勒松子酱）',
    'Opened Wine': '喝剩下的红白葡萄酒（已开瓶）',
    'Orange Juice': '橙汁',
    'Oranges': '甜橙',
    'Oyster Sauce': '蚝油',
    'Pancakes': '松饼（美式薄煎饼）',
    'Pancakes Frozen': '冷冻松饼',
    'Papaya': '木瓜',
    'Parmesan': '帕玛森干酪（干酪碎）',
    'Peaches': '鲜桃（水蜜桃）',
    'Pears': '梨',
    'Peas': '青豆（荷兰豆/甜豆）',
    'Pesto': '罗勒青酱（Pesto）',
    'Pie': '烘烤派（馅饼）',
    'Pie Crust Dough': '派皮面团（酥皮生坯）',
    'Pineapple': '菠萝（凤梨）',
    'Pita Bread': '皮塔饼（口袋饼）',
    'Pizza': '披萨（比萨饼）',
    'Pizza Dough': '生披萨面团',
    'Plums': '李子',
    'Pork Chops': '生猪排（生猪大排）',
    'Pot Pies': '酥皮焗烤派（Pot Pie）',
    'Potatoes': '土豆（马铃薯）',
    'Provolone Cheese': '波罗伏洛干酪',
    'Pulled Pork': '手撕慢烤猪肉（Pulled Pork）',
    'Quiche': '法式咸派（洛林糕）',
    'Ranch Dressing': '牧场沙拉酱（田园沙拉酱）',
    'Raspberries': '覆盆子（红树莓）',
    'Ricotta Cheese': '里科塔奶酪',
    'Salad Dressing': '沙拉汁（调味沙拉酱）',
    'Salmon': '生三文鱼片',
    'Salsa': '墨西哥鲜辣酱（莎莎酱）',
    'Scallops': '鲜扇贝肉（鲜带子）',
    'Shrimp': '生虾（鲜虾仁）',
    'Smoked Salmon': '烟熏三文鱼',
    'Smoothie': '水果冰沙（果昔）',
    'Soft Cheese': '软质新鲜奶酪',
    'Soup': '浓汤（蔬菜炖汤）',
    'Soup Dumplings': '小笼灌汤包',
    'Sour Cream': '酸奶油',
    'Sour Cream Opened': '酸奶油（已开封）',
    'Sourdough Bread': '酸种面包（天然酵母面包）',
    'Spinach': '菠菜',
    'Sriracha': '是拉差辣椒酱',
    'Strawberries': '草莓',
    'Stuffed Peppers': '酿甜椒（肉馅青椒）',
    'Swiss Cheese': '瑞士奶酪（蜂窝大孔芝士）',
    'Tahini': '芝麻酱（中东白芝麻酱）',
    'Tamales': '墨西哥玉米粽（Tamale）',
    'Tempeh': '丹贝（印尼发酵大豆饼）',
    'Teriyaki Sauce': '照烧酱汁',
    'Tilapia Fish': '罗非鱼柳（生白身鱼）',
    'Tofu': '鲜豆腐',
    'Tomatoes': '西红柿（番茄）',
    'Tortillas': '玉米薄饼（墨西哥玉米面饼）',
    'Tuna Steak': '金枪鱼排（生金枪鱼块）',
    'Turkey': '生火鸡肉',
    'Tzatziki': '希腊黄瓜酸奶酱（Tzatziki）',
    'Waffles': '华夫饼',
    'Waffles Frozen': '冷冻华夫饼',
    'Watermelon': '西瓜',
    'Wonton Wrappers': '馄饨皮',
    'Yogurt': '酸奶'
}

DURATION_JA = {
    '1 Day': '1日',
    '1 Month': '1ヶ月',
    '1 Week': '1週間',
    '1 Year': '1年',
    '1-2 Days': '1〜2日',
    '1-2 Months': '1〜2ヶ月',
    '1-2 Weeks': '1〜2週間',
    '1-2 Years': '1〜2年',
    '1-3 Months': '1〜3ヶ月',
    '10 Days': '10日',
    '10-12 Months': '10〜12ヶ月',
    '2 Months': '2ヶ月',
    '2 Weeks': '2週間',
    '2-3 Days': '2〜3日',
    '2-3 Months': '2〜3ヶ月',
    '2-5 Days': '2〜5日',
    '3 Days': '3日',
    '3 Months': '3ヶ月',
    '3-4 Days': '3〜4日',
    '3-4 Months': '3〜4ヶ月',
    '3-4 Weeks': '3〜4週間',
    '3-5 Days': '3〜5日',
    '3-5 Months': '3〜5ヶ月',
    '3-5 Weeks': '3〜5週間',
    '3-6 Months': '3〜6ヶ月',
    '4 Months': '4ヶ月',
    '4-5 Days': '4〜5日',
    '4-6 Months': '4〜6ヶ月',
    '4-6 Weeks': '4〜6週間',
    '4-7 Days': '4〜7日',
    '5-7 Days': '5〜7日',
    '6 Months': '6ヶ月',
    '6-12 Months': '6〜12ヶ月',
    '6-8 Months': '6〜8ヶ月',
    '6-9 Months': '6〜9ヶ月',
    '7-10 Days': '7〜10日',
    '8-12 Months': '8〜12ヶ月',
    '9 Months': '9ヶ月',
    '9-12 Months': '9〜12ヶ月',
    'Indefinite': '無期限（品質劣化あり）'
}

DURATION_ZH = {
    '1 Day': '1天',
    '1 Month': '1个月',
    '1 Week': '1周',
    '1 Year': '1年',
    '1-2 Days': '1-2天',
    '1-2 Months': '1-2个月',
    '1-2 Weeks': '1-2周',
    '1-2 Years': '1-2年',
    '1-3 Months': '1-3个月',
    '10 Days': '10天',
    '10-12 Months': '10-12个月',
    '2 Months': '2个月',
    '2 Weeks': '2周',
    '2-3 Days': '2-3天',
    '2-3 Months': '2-3个月',
    '2-5 Days': '2-5天',
    '3 Days': '3天',
    '3 Months': '3个月',
    '3-4 Days': '3-4天',
    '3-4 Months': '3-4个月',
    '3-4 Weeks': '3-4周',
    '3-5 Days': '3-5天',
    '3-5 Months': '3-5个月',
    '3-5 Weeks': '3-5周',
    '3-6 Months': '3-6个月',
    '4 Months': '4个月',
    '4-5 Days': '4-5天',
    '4-6 Months': '4-6个月',
    '4-6 Weeks': '4-6周',
    '4-7 Days': '4-7天',
    '5-7 Days': '5-7天',
    '6 Months': '6个月',
    '6-12 Months': '6-12个月',
    '6-8 Months': '6-8个月',
    '6-9 Months': '6-9个月',
    '7-10 Days': '7-10天',
    '8-12 Months': '8-12个月',
    '9 Months': '9个月',
    '9-12 Months': '9-12个月',
    'Indefinite': '无限期（但风味品质会下降）'
}

LOC_JA = {
    'fridge': '冷蔵庫',
    'freezer': '冷凍庫',
    'pantry': 'パントリー（常温暗所）',
    'counter': 'キッチンカウンター（常温）'
}

LOC_ZH = {
    'fridge': '冰箱冷藏室',
    'freezer': '冰箱冷冻室',
    'pantry': '食品储藏室（阴凉干燥处）',
    'counter': '厨房台面（常温）'
}

MATERIAL_JA = {
    'Animal Protein': '動物性タンパク質（肉・魚）',
    'Fresh Fruit': '生鮮果物',
    'Fresh Vegetable': '生鮮野菜',
    'Kitchen Appliance Component': 'キッチン用品・保存容器',
    'Liquid Beverage': '飲料・液体食品',
    'Perishable Dairy / Soy / Protein Product': '乳製品・大豆製品・タンパク質食品',
    'Poultry Product (Eggs)': '家禽製品（卵）',
    'Prepared Food Product': '調理済み食品・総菜',
    'Stainless Steel / Alloy Metal': '金属・ステンレス製容器',
    'Synthetic Polyester Blend': '合成繊維・保存バッグ'
}

MATERIAL_ZH = {
    'Animal Protein': '动物蛋白（肉类及水产）',
    'Fresh Fruit': '新鲜水果',
    'Fresh Vegetable': '新鲜蔬菜',
    'Kitchen Appliance Component': '厨房用品与存储容器',
    'Liquid Beverage': '液体饮品与汤饮',
    'Perishable Dairy / Soy / Protein Product': '易腐乳制品 / 豆制品 / 蛋白类食品',
    'Poultry Product (Eggs)': '禽类蛋品（鸡蛋）',
    'Prepared Food Product': '熟食与预制调理食品',
    'Stainless Steel / Alloy Metal': '不锈钢 / 合金金属',
    'Synthetic Polyester Blend': '合成聚酯复合材质'
}

RISK_JA = {
    'Cellular structure collapse & moisture loss': '細胞構造の破壊および水分の蒸発・食感劣化',
    'Electromagnetic arcing, oxidation, & rust': '酸化および結露による金属の腐食・変色',
    'Friction shrinkage & elastic degradation': '温度変化による収縮および弾力性の低下',
    'Pathogenic contamination (Salmonella, E. coli)': '病原菌汚染（サルモネラ菌・大腸菌など食中毒菌の繁殖）',
    'Pressure explosion & pathogen growth': '発酵ガスによる膨張破損および嫌気性病原菌の増殖',
    'Rapid bacterial growth & emulsion collapse': '急速な細菌増殖および乳化破壊（分離・変質）',
    'Superheating & container bursting': '凍結による体積膨張・容器の破損',
    'Texture degradation & bacterial spore hazard': '食感の著しい劣化およびセレウス菌等の芽胞菌ハザード',
    'Thermal distortion & coating wear': '温度変化による歪みおよび変質'
}

RISK_ZH = {
    'Cellular structure collapse & moisture loss': '细胞壁破裂塌陷与水分流失导致风味口感软烂',
    'Electromagnetic arcing, oxidation, & rust': '氧化变质与冷凝结露引起锈蚀及风味劣变',
    'Friction shrinkage & elastic degradation': '温差收缩与弹性纤维降解老化',
    'Pathogenic contamination (Salmonella, E. coli)': '致病菌污染（沙门氏菌、致病性大肠杆菌等病菌超标）',
    'Pressure explosion & pathogen growth': '发酵气体膨胀胀袋及厌氧病原菌繁殖隐患',
    'Rapid bacterial growth & emulsion collapse': '细菌快速繁殖及乳化体系瓦解分层酸败',
    'Superheating & container bursting': '冷冻体积膨胀导致密闭容器胀裂',
    'Texture degradation & bacterial spore hazard': '质地严重劣化及耐热细菌芽孢繁殖风险',
    'Thermal distortion & coating wear': '温度剧烈波动导致变形或涂层变质'
}

TIP_JA = {
    'Avoid heating liquids past their boiling point; use a wooden stir stick to prevent eruption.': '加熱時は突沸を防ぐため過度な沸騰を避け、よくかき混ぜてください。',
    'Cool cooked foods quickly and reheat to at least 165°F (74°C) before serving.': '調理済み食品は速やかに粗熱を取り、再加熱時は中心温度74℃以上まで加熱してください。',
    'Hand wash metal cookware to preserve seasoning and coatings; never put metals in the microwave.': '保存容器や器具は清潔に手洗いし、衛生状態を保ちましょう。',
    'Hand wash to protect coatings; place plastic components on the top rack of the dishwasher only.': '保存容器のパッキンや蓋の変形を防ぐため、密閉性を定期的に確認してください。',
    'Never microwave raw eggs in their shells; store fresh eggs below 40°F (4°C) to prevent Salmonella.': '生卵はサルモネラ菌の増殖を防ぐため必ず4℃以下の冷蔵庫で保管してください。',
    'Store tightly sealed below 40°F (4°C) and check for separation or off-odors before using.': '4℃以下でしっかり密閉保存し、使用前に異臭や油分の分離がないか確認してください。',
    'Store whole produce in cool, humid crisper drawers; wash right before eating.': '野菜や果物は野菜室で湿度を保ち、食べる直前に水洗いしてください。',
    'Thaw raw meats in the refrigerator below 40°F (4°C) and cook to safe internal temperatures.': '生肉は4℃以下の冷蔵庫内で解凍し、中心まで十分に火を通してください。',
    'Wash delicate garments inside a mesh wash bag and air dry to maintain shape and size.': '清潔な保存袋を使用し、外気に触れないよう空気を抜いて密閉してください。'
}

TIP_ZH = {
    'Avoid heating liquids past their boiling point; use a wooden stir stick to prevent eruption.': '加热液体时避免过度沸腾，搅拌均匀以防发生突沸烫伤。',
    'Cool cooked foods quickly and reheat to at least 165°F (74°C) before serving.': '熟食应迅速降温冷藏，食用前务必充分彻底加热至中心温度74°C以上。',
    'Hand wash metal cookware to preserve seasoning and coatings; never put metals in the microwave.': '妥善清洁保存器皿，保持干净无油无水环境以延长保鲜期。',
    'Hand wash to protect coatings; place plastic components on the top rack of the dishwasher only.': '定期检查保鲜盒密封胶圈完好度，确保密封防漏。',
    'Never microwave raw eggs in their shells; store fresh eggs below 40°F (4°C) to prevent Salmonella.': '生鸡蛋须冷藏于4°C以下防止沙门氏菌滋生，严禁带壳微波加热。',
    'Store tightly sealed below 40°F (4°C) and check for separation or off-odors before using.': '置于4°C以下严密冷藏，使用前仔细观察有无分层变质或酸败异味。',
    'Store whole produce in cool, humid crisper drawers; wash right before eating.': '整只生鲜果蔬置于冰箱保鲜抽屉中存放，待食用前再彻底清洗。',
    'Thaw raw meats in the refrigerator below 40°F (4°C) and cook to safe internal temperatures.': '生肉解冻应置于4°C以下冷藏室缓慢进行，烹饪时务必彻底煮熟煮透。',
    'Wash delicate garments inside a mesh wash bag and air dry to maintain shape and size.': '使用洁净食品级包装袋密封，尽量挤出空气后封口防氧化。'
}

LEARN_JA = {
    'Agitation and high temperature cause wool fibers to felt and shrink, while heat relaxes and weakens elastane (spandex) threads, ruining the elasticity of athletic wear.': '食材や保管容器は温度変化や湿度の影響を受けやすく、適切な密閉と温度管理が鮮度維持の最重要ポイントです。',
    'Dairy, soy, and protein shakes are highly perishable products with rich nutrient contents. When left in the temperature Danger Zone, bacteria propagate rapidly, causing safety hazards.': '乳製品や大豆プロテイン製品は栄養価が高く細菌にとって絶好の増殖源です。危険温度帯（5〜60℃）に放置すると急速に腐敗が進みます。',
    'Engineered plastics and non-stick coatings are heat-tolerant, but harsh cycles can shrink gaskets, warp outer rims, and strip non-stick layers over time.': '密閉容器のパッキンや樹脂は経年劣化するため、定期的に気密性を確認して食材の酸化や乾燥を防ぐことが重要です。',
    'Intense microwave radiation boils trapped steam within solid protein or shell matrices, causing structural blowouts and violent pop splatters.': '密閉されたタンパク質組織や卵殻内部の水分は、加熱時に膨張して破裂の危険を招くため、再加熱時は注意が必要です。',
    'Moisture loss and ethylene gas buildup trigger rapid over-ripening and decay. Low temperatures slow cellular respiration in fresh vegetables.': '青果物は呼吸作用とエチレンガスの発生により熟成が進みます。適正な低温管理で呼吸量を抑え、鮮度低下を遅らせることができます。',
    'Raw meat holds rich moisture and nutrients, serving as an ideal host for pathogens. Only cooking to safe internal temperatures destroys bacteria.': '生の肉類は水分とアミノ酸が豊富で病原菌の温床になりやすいため、冷蔵・冷凍での厳重な温度管理と確実な加熱殺菌が不可欠です。',
    'Salmonella enteritidis can colonize egg yolks. Washing eggs strips the protective cuticle bloom, increasing porosity and contamination risk.': '生卵のサルモネラ菌汚染を防ぐため、保存温度の維持が極めて重要です。殻の水洗いはクチクラ層を剥がし雑菌侵入を招くため避けましょう。',
    'Starchy grains and cooked meals are prone to Bacillus cereus spore germination when held between 40°F and 140°F (4°C - 60°C).': '米飯やパスタなどのデンプン質食品は、危険温度帯（4〜60℃）で放置するとセレウス菌の芽胞が発芽し毒素を産生するため急速な冷却が必須です。',
    'Sudden boiling (superheating) happens when clean liquids are heated in smooth containers without nucleation points, creating hazardous eruptions.': '液体の保存や温め直し時は、表面の皮膜形成や分離に注意し、密閉容器で品質を保つことが大切です。'
}

LEARN_ZH = {
    'Agitation and high temperature cause wool fibers to felt and shrink, while heat relaxes and weakens elastane (spandex) threads, ruining the elasticity of athletic wear.': '食材与保存容器在温度波动和湿度变化下易发生物理劣变，严格密闭和控温是延长保鲜期的基石。',
    'Dairy, soy, and protein shakes are highly perishable products with rich nutrient contents. When left in the temperature Danger Zone, bacteria propagate rapidly, causing safety hazards.': '乳制品与大豆蛋白类富含水溶性营养与水分，属于极易腐食品。处于危险温度带（5°C-60°C）时，食源性细菌会呈指数级极速繁殖。',
    'Engineered plastics and non-stick coatings are heat-tolerant, but harsh cycles can shrink gaskets, warp outer rims, and strip non-stick layers over time.': '食品级储藏容器的密封胶圈随着时间推移会老化失弹，定期维护气密性可有效隔绝氧气减缓氧化。',
    'Intense microwave radiation boils trapped steam within solid protein or shell matrices, causing structural blowouts and violent pop splatters.': '内部高水相蛋白质密闭结构受热会产生极高内部蒸气压，处理与再加热时需格外注意排气与安全。',
    'Moisture loss and ethylene gas buildup trigger rapid over-ripening and decay. Low temperatures slow cellular respiration in fresh vegetables.': '生鲜果蔬采摘后仍有呼吸作用并释放乙烯气体。适度低温与保鲜抽屉湿度能显著降低细胞呼吸速率，延缓叶绿素降解。',
    'Raw meat holds rich moisture and nutrients, serving as an ideal host for pathogens. Only cooking to safe internal temperatures destroys bacteria.': '生鲜肉类水分活度高且富含蛋白质，是细菌繁殖的温床。唯有全程低温冷链并在食用前充分加热至安全中心温度方可消除风险。',
    'Salmonella enteritidis can colonize egg yolks. Washing eggs strips the protective cuticle bloom, increasing porosity and contamination risk.': '鸡蛋表面有一层天然保护胶护膜（Cuticle）。清洗鸡蛋会洗脱该保护膜令蛋壳气孔开放，反而让病菌容易侵入蛋内，应直接冷藏。',
    'Starchy grains and cooked meals are prone to Bacillus cereus spore germination when held between 40°F and 140°F (4°C - 60°C).': '淀粉类米面熟食在4°C至60°C危险温度区间滞留极易促使蜡样芽孢杆菌萌发繁殖并释放耐热毒素，熟食出锅后应尽快降温冷藏。',
    'Sudden boiling (superheating) happens when clean liquids are heated in smooth containers without nucleation points, creating hazardous eruptions.': '液体或乳化汤汁冷藏时易发生水油分层，加盖严密密封能阻隔串味，防止表面风干结皮。'
}

STORAGE_JA = {
    'Label the container with the date of storage.': '保存容器に保存日（日付）をラベルシール等で明記する。',
    'Label the packaging with the purchase or preparation date.': 'パッケージに購入日または調理日を明記する。',
    'Place in the center or lower back shelf of the counter where temperatures are most stable.': '直射日光を避け、風通しの良いキッチンの冷暗所に置く。',
    'Place in the center or lower back shelf of the freezer where temperatures are most stable.': '温度変化の少ない冷凍庫の中央または奥側の棚に置く。',
    'Place in the center or lower back shelf of the fridge where temperatures are most stable.': 'ドアポケットを避け、温度が最も安定している冷蔵室の中央または最下段の奥に置く。',
    'Place the item in the colder zone of your counter.': 'カウンターの中でも熱源（コンロ・家電）から離れた涼しい場所に置く。',
    'Place the item in the colder zone of your freezer.': '冷凍庫の中でも冷気の吹き出し口に近い冷えやすいゾーンに置く。',
    'Place the item in the colder zone of your fridge.': '冷蔵庫のチルドルームや冷気の吹き出し口に近い冷えやすい場所に置く。',
    'Place the item in the colder zone of your pantry.': 'パントリーの中でも床に近い涼しく湿気のたまらない場所に置く。',
    'Store in an airtight container or zip-top heavy-duty storage bag.': '密閉容器またはジッパー付きの厚手冷凍・冷蔵保存袋に入れる。',
    'Use an airtight container or a heavy-duty storage bag.': '密閉できる保存容器または厚手ジッパー保存袋を使用する。'
}

STORAGE_ZH = {
    'Label the container with the date of storage.': '在保鲜盒或密封袋表面贴上标注保存日期的标签。',
    'Label the packaging with the purchase or preparation date.': '在包装袋上清楚标明购买日期或烹饪制作日期。',
    'Place in the center or lower back shelf of the counter where temperatures are most stable.': '避开阳光直射，置于厨房台面最阴凉、通风良好的中心区域。',
    'Place in the center or lower back shelf of the freezer where temperatures are most stable.': '置于冷冻室内部中央或下层靠近背部温度最恒定的区域。',
    'Place in the center or lower back shelf of the fridge where temperatures are most stable.': '避开频繁开关的冰箱门架，置于冷藏室中央或下层靠近内壁温度最恒定处。',
    'Place the item in the colder zone of your counter.': '置于台面远离灶台、烤箱等产热电器的较凉爽区域。',
    'Place the item in the colder zone of your freezer.': '置于冷冻室制冷风口附近等冷冻效果更强的区域。',
    'Place the item in the colder zone of your fridge.': '置于冷藏室内靠近出风口或冷气充足的区域（如零度保鲜区）。',
    'Place the item in the colder zone of your pantry.': '置于食品储藏室内靠近地面、阴凉干燥且通风良好的区域。',
    'Store in an airtight container or zip-top heavy-duty storage bag.': '放入密封保鲜盒或加厚自封食品级保鲜袋中保存。',
    'Use an airtight container or a heavy-duty storage bag.': '使用密封性优良的保鲜盒或结实耐用的食品保鲜密封袋。'
}

SPOILAGE_JA = {
    'A pungent, sour, or off odor indicating active bacterial breakdown.': '細菌の分解作用による鼻をつく刺激臭、酸っぱい異臭、または腐敗臭。',
    'A soft or mushy texture that deviates from fresh state.': '新鮮な状態とは異なる、ぶよぶよとした柔らかさや崩れたドロドロ食感。',
    'A sour, off odor indicating bacterial activity.': '細菌の活動による酸っぱい臭いや不快な異臭。',
    'A sticky, slimy film or a mushy texture that differs from its fresh state.': '表面のネバネバしたぬめり膜、または新鮮時と異なるドロっとした軟化。',
    'Visible slime, mold growth, or skin discolorations.': '目に見えるぬめり、白や緑のカビの発生、または表面の変色。',
    'Visible white, green, or grey mold growth on the item surface.': '表面に白、緑、または灰色のカビが目視で確認できる。'
}

SPOILAGE_ZH = {
    'A pungent, sour, or off odor indicating active bacterial breakdown.': '散发出刺鼻、酸臭或明显不同于新鲜状态的腐败异味（细菌分解迹象）。',
    'A soft or mushy texture that deviates from fresh state.': '质地发软、变烂坍塌，明显不同于新鲜时的紧致或爽脆状态。',
    'A sour, off odor indicating bacterial activity.': '散发出酸臭味、发酵馊味或明显的变质异味。',
    'A sticky, slimy film or a mushy texture that differs from its fresh state.': '表面附着黏腻拉丝的黏液薄膜，或质地发烂发软。',
    'Visible slime, mold growth, or skin discolorations.': '肉眼可见的黏液滑腻、霉菌斑点生成，或表皮出现发黑发灰等异常变色。',
    'Visible white, green, or grey mold growth on the item surface.': '表面出现明显的白色、绿色或灰色绒毛状霉菌斑。'
}

def translate_faq_ja(q, a, duration_ja):
    if 'past the' in q:
        q_ja = f'{duration_ja}の目安期間を過ぎても食べられますか？'
        a_ja = 'おすすめできません。食中毒の原因となる病原菌は、見た目や臭いに目立った変化が現れないまま危険なレベルまで増殖することがあります。'
    elif 'container' in q:
        q_ja = 'どのような保存容器が最適ですか？'
        a_ja = 'ロック式の密閉パッキンが付いたガラス製保存容器や、厚手のジッパー付き密閉保存袋が最も密閉性に優れ酸化を防げます。'
    elif 'freez' in q:
        q_ja = '冷凍すれば保存期間をさらに延ばせますか？'
        a_ja = 'はい、冷凍することで細菌の繁殖を完全に停止させることができます。ただし、時間の経過とともに水分が抜けて食感や風味は徐々に低下します。'
    else:
        q_ja = q
        a_ja = a
    return {"question": q_ja, "answer": a_ja}

def translate_faq_zh(q, a, duration_zh):
    if 'past the' in q:
        q_zh = f'超过{duration_zh}的推荐期限后还能吃吗？'
        a_zh = '非常不建议食用。即使食品在外观、颜色或气味上没有明显的腐坏变质迹象，致病细菌仍可能已经大量繁殖超标。'
    elif 'container' in q:
        q_zh = '哪种储存容器保鲜效果最好？'
        a_zh = '带四面锁扣和硅胶密封圈的食品级玻璃保鲜盒密封效果最好，能有效隔绝空气中的氧气与冰箱串味。'
    elif 'freez' in q:
        q_zh = '冷冻保存可以延长保质期吗？'
        a_zh = '可以，冷冻低温能彻底抑制细菌的生命代谢活动。虽然冷冻可以无限期保持食品安全，但口感和营养价值会随时间逐渐流失。'
    else:
        q_zh = q
        a_zh = a
    return {"question": q_zh, "answer": a_zh}

def build_datasets():
    with open('src/data/how-long.json', 'r', encoding='utf-8') as f:
        en_data = json.load(f)

    print(f"Total English items: {len(en_data)}")

    ja_items = []
    zh_items = []

    for i, item in enumerate(en_data):
        slug = item['slug']
        en_name = item['item']
        loc = item['location']
        dur = item['duration']

        assert en_name in FOOD_JA, f"Missing JA food: {en_name}"
        assert en_name in FOOD_ZH, f"Missing ZH food: {en_name}"
        assert dur in DURATION_JA, f"Missing JA duration: {dur}"
        assert dur in DURATION_ZH, f"Missing ZH duration: {dur}"

        ja_name = FOOD_JA[en_name]
        zh_name = FOOD_ZH[en_name]
        ja_dur = DURATION_JA[dur]
        zh_dur = DURATION_ZH[dur]
        ja_loc = LOC_JA.get(loc, loc)
        zh_loc = LOC_ZH.get(loc, loc)

        # JA Item
        short_ja = f"一般的に、{ja_name}は{ja_loc}で{ja_dur}保存できます。"
        reason_ja = f"USDA（米国農務省）の食品安全ガイドラインによると、{ja_name}を{ja_loc}の適切な温度で保管することで、細菌の増殖が抑えられ鮮度と品質が保たれます。\n\nただし、交差汚染や乾燥・冷凍焼けを防ぐため、密閉性の高い容器や保存袋で完全に密封することが極めて重要です。長期間保存すると、食中毒菌が繁殖していなくても風味や栄養価が低下します。"
        storage_ja = [STORAGE_JA.get(t, t) for t in item['storageTips']]
        spoilage_ja = [SPOILAGE_JA.get(s, s) for s in item['spoilageSigns']]
        faqs_ja = [translate_faq_ja(f['question'], f['answer'], ja_dur) for f in item['faqs']]

        ja_entry = {
            "item": ja_name,
            "slug": slug,
            "location": loc,
            "duration": ja_dur,
            "safe": item['safe'],
            "shortAnswer": short_ja,
            "reason": reason_ja,
            "storageTips": storage_ja,
            "spoilageSigns": spoilage_ja,
            "faqs": faqs_ja,
            "relatedItems": item.get('relatedItems', []),
            "material": MATERIAL_JA.get(item.get('material', ''), item.get('material', '')),
            "keyRisk": RISK_JA.get(item.get('keyRisk', ''), item.get('keyRisk', '')),
            "tip": TIP_JA.get(item.get('tip', ''), item.get('tip', '')),
            "learnMore": LEARN_JA.get(item.get('learnMore', ''), item.get('learnMore', ''))
        }
        ja_items.append(ja_entry)

        # ZH Item
        short_zh = f"通常情况下，{zh_name}在{zh_loc}可安全存放{zh_dur}。"
        reason_zh = f"根据美国农业部（USDA）食品安全指南，将{zh_name}存放在{zh_loc}并在适宜温度下密封保存，可显著减缓细菌繁殖，维持新鲜度与食用安全。\n\n然而，务必使用密封保鲜盒或密实袋严实封装，以防交叉污染和冷冻灼伤。即使在安全期内未滋生致病菌，长时间储存也会导致风味、口感和营养成分逐渐流失。"
        storage_zh = [STORAGE_ZH.get(t, t) for t in item['storageTips']]
        spoilage_zh = [SPOILAGE_ZH.get(s, s) for s in item['spoilageSigns']]
        faqs_zh = [translate_faq_zh(f['question'], f['answer'], zh_dur) for f in item['faqs']]

        zh_entry = {
            "item": zh_name,
            "slug": slug,
            "location": loc,
            "duration": zh_dur,
            "safe": item['safe'],
            "shortAnswer": short_zh,
            "reason": reason_zh,
            "storageTips": storage_zh,
            "spoilageSigns": spoilage_zh,
            "faqs": faqs_zh,
            "relatedItems": item.get('relatedItems', []),
            "material": MATERIAL_ZH.get(item.get('material', ''), item.get('material', '')),
            "keyRisk": RISK_ZH.get(item.get('keyRisk', ''), item.get('keyRisk', '')),
            "tip": TIP_ZH.get(item.get('tip', ''), item.get('tip', '')),
            "learnMore": LEARN_ZH.get(item.get('learnMore', ''), item.get('learnMore', ''))
        }
        zh_items.append(zh_entry)

    # Validate 100% slug parity
    for i in range(len(en_data)):
        assert ja_items[i]['slug'] == en_data[i]['slug'], f"Slug mismatch at {i}: {ja_items[i]['slug']} != {en_data[i]['slug']}"
        assert zh_items[i]['slug'] == en_data[i]['slug'], f"Slug mismatch at {i}: {zh_items[i]['slug']} != {en_data[i]['slug']}"

    # Write output files
    ja_path = Path('src/data/how-long.ja.json')
    with open(ja_path, 'w', encoding='utf-8') as f:
        json.dump(ja_items, f, ensure_ascii=False, indent=2)
    print(f"Successfully generated {ja_path} with {len(ja_items)} items.")

    zh_path = Path('src/data/how-long.zh-cn.json')
    with open(zh_path, 'w', encoding='utf-8') as f:
        json.dump(zh_items, f, ensure_ascii=False, indent=2)
    print(f"Successfully generated {zh_path} with {len(zh_items)} items.")

if __name__ == '__main__':
    build_datasets()
