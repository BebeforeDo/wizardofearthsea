import os
import json

# 定義資料夾路徑和 JSON 檔案名稱
images_folder = "images"
output_file = "tarot-card.json"

# 初始化卡片資料的列表
tarot_cards = []

# 遍歷 images 資料夾中的所有檔案
for filename in os.listdir(images_folder):
    if filename.endswith(".png"):
        # 假設圖片的名稱對應卡牌名稱，去除副檔名後即為卡牌名稱
        card_name = os.path.splitext(filename)[0]
        
        # 根據圖片名稱構建卡牌資料
        card_data = {
            "name_english": card_name,
            "name_chinese": "假名",  # 中文名稱暫時用假名占位
            "image": f"{images_folder}/{filename}",
            "detailUrl": f"https://www.notion.so/{card_name}-detail"  # 這裡可以根據需要修改 URL 規則
        }
        
        # 將卡牌資料添加到列表中
        tarot_cards.append(card_data)

# 將卡片資料列表轉換為 JSON 格式並寫入檔案
with open(output_file, "w", encoding="utf-8") as json_file:
    json.dump(tarot_cards, json_file, ensure_ascii=False, indent=4)

print(f"已生成 {output_file}，包含 {len(tarot_cards)} 張卡牌資料。")
