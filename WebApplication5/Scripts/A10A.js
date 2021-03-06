﻿
    var ATC_1 = [
        {
        "name": "A:消化系統和代謝系統",
},
        {
        "name": "B:血液及造血器官",
},
        {
        "name": "C:心血管系統",
},
        {
        "name": "D:皮膚科用藥",
},
        {
        "name": "G:泌尿生殖系統及性激素藥品",
},
        {
        "name": "H:激素製劑，不包括性激素及胰島素",
},
        {
        "name": "J:抗感染藥",
},
        {
        "name": "P:抗寄生蟲藥、殺蟲劑及驅蟲劑"
},
        {
        "name": "L:抗腫瘤藥及免疫製劑"
},
        {
        "name": "M:肌肉及骨骼系統"
},
        {
        "name": "N:神經系統"
},
        {
        "name": "R:呼吸系統"
},
        {
        "name": "S:感覺器"
},
        {
        "name": "V:其他"
}
]
var ATC_a = [
        {
        "name": "A01:口腔病藥物",
},
        {
        "name": "A02:治療與胃酸分泌相關疾病的藥物",
},
        {
        "name": "A03:腸胃機能失調用藥",
},
        {
        "name": "A04:止吐藥及止噁心藥",
},
        {
        "name": "A05:肝、膽疾病治療藥",
},
        {
        "name": "A06:輕瀉藥",
},
        {
        "name": "A07:止瀉藥、腸道消炎藥、腸道抗感染藥",
},
        {
        "name": "A08:減肥製劑，不包含飲食製品",
},
        {
        "name": "A09:消化藥，包括酶",
},
        {
        "name": "A10:糖尿病用藥",
},
        {
        "name": "A11 維生素"
},
        {
        "name": "A12 礦物補充劑"
},
        {
        "name": "A13 補藥"
},
        {
        "name": "A14 同化作用藥"
},
        {
        "name": "A15 食慾促進劑"
},
        {
        "name": "A16 其它消化道及新陳代謝用藥"
}
]

var ATC_b = [
        {
        "name": "B01 抗血栓藥（Antithrombotic agents）"
},
        {
        "name": "B02 抗出血藥（Antihemorrhagics）"
},
        {
        "name": "B03 抗貧血藥（Antianemic preparations）"
},
        {
        "name": "B05 換血及灌注液（Blood substitutes and perfusion solutions）"
},
        {
        "name": "B06 其它血液學藥劑（Other hematological agents）"
}
]

var ATC_c = [
        {
        "name": "C01 心臟治療（Cardiac therapy)"
},
        {
        "name": "C02 抗高血壓藥(Antihypertensives)"
},
        {
        "name": "C03 利尿藥(Diuretics)"
},
        {
        "name": "C04 外周血管擴張藥(Peripheral vasodilators)"
},
        {
        "name": "C05 血管保護劑(Vasoprotectives)"
},
        {
        "name": "C07 β阻滯劑(Beta blocking agents)"
},
        {
        "name": "C08 鈣通道阻滯劑(Calcium channel blockers)"
},
        {
        "name": "C09 作用在腎素 - 血管緊張素系統上的藥劑(Agents acting on the renin - angiotensin system)"
},
        {
        "name": "C10 血脂調節劑(Lipid modifying agents)"
}
]

var ATC_d = [
        {
        "name": "D01 皮膚病用抗真菌藥（Antifungals for dermatological use）"
},
        {
        "name": "D02 潤膚劑及保護劑（Emollients and protectives）"
},
        {
        "name": "D03 治療創傷及潰瘍製劑（Preparations for treatment of wounds and ulcers）"
},
        {
        "name": "D04 止癢藥（包括抗組胺藥、麻醉劑等）（Antipruritics, including antihistamines, anesthetics, etc.）"
},
        {
        "name": "D05 抗銀屑病藥（Antipsoriatics）"
},
        {
        "name": "D06 皮膚病用抗生素及化學治療藥（Antibiotics and chemotherapeutics for dermatological use）"
},
        {
        "name": "D07 皮質類固醇皮膚科製劑（Corticosteroids, dermatological preparations）"
},
        {
        "name": "D08 消毒劑及殺菌劑（Antiseptics and disinfectants）"
},
        {
        "name": "D09 醫用敷料（Medicated dressings）"
},
        {
        "name": "D10 防粉刺製劑（Anti - acne preparations）"
},
        {
        "name": "D11 其它皮膚科製劑（Other dermatological preparations）"
},
]

var ATC_g = [
        {
        "name": "G01 婦產科抗感染藥及殺菌劑（Gynecological antiinfectives and antiseptics）"
},
        {
        "name": "G02 其它婦產科用藥（Other gynecologicals）"
},
        {
        "name": "G03 性激素及生殖系統調質（Sex hormones and modulators of the genital system）"
},
        {
        "name": "G04 泌尿外科（Urologicals）"
},
]

var ATC_h = [
        {
        "name": "H01 垂體、下丘腦激素及類似物（Pituitary and hypothalamic hormones and analogues）"
},
        {
        "name": "H02 皮質類固醇（Corticosteroids for systemic use）"
},
        {
        "name": "H03 甲狀腺治療（Thyroid therapy）"
},
        {
        "name": "H04 胰激素（Pancreatic hormones）"
},
        {
        "name": "H05 體內鈣平衡（Calcium homeostasis(PITUITARY AND HYPOTHALAMIC HORMONES AND ANALOGUES)"
},
]

var ATC_j = [
        {
        "name": "J01 抗菌藥（Antibacterials for systemic use)"
},
        {
        "name": "J02 抗真菌藥（Antimycotics for systemic use）"
},
        {
        "name": "J04 抗分支桿菌藥（Antimycobacterials）"
},
        {
        "name": "J05 抗病毒藥（Antivirals for systemic use）"
},
        {
        "name": "J06 免疫血清及免疫球蛋白（Immune sera and immunoglobulins）"
},
        {
        "name": "J07 疫苗（Vaccines）"
}
]

var ATC_p = [
        {
        "name": "P01 抗原蟲藥（Antiprotozoals）"
},
        {
        "name": "P02 驅腸蟲藥（Anthelmintics）"
},
        {
        "name": "P03 殺體外寄生蟲藥，包括殺疥蟎藥、殺蟲劑、驅蟲劑（Ectoparasiticides, including scabicides, insecticides and repellents）"
},
]

var ATC_l = [
        {
        "name": "L01 抗腫瘤藥（Antineoplastic agents）"
},
        {
        "name": "L02 內分泌治療（Endocrine therapy）"
},
        {
        "name": "L03 免疫增強劑（Immunostimulants）"
},
        {
        "name": "L04 免疫抑制劑（Immunosuppressants）"
},
]

var ATC_m = [
        {
        "name": "M01 抗炎藥及抗風濕藥（Anti - inflammatory and antirheumatic products）"
},
        {
        "name": "M02 關節和肌肉疼痛外用產品（Topical products for joint and muscular pain）"
},
        {
        "name": "M03 肌肉鬆弛劑（Muscle relaxants）"
},
        {
        "name": "M04 抗痛風藥（Antigout preparations）"
},
        {
        "name": "M05 骨病治療藥（Drugs for treatment of bone diseases）"
},
        {
        "name": "M09 治療肌骨骼系統紊亂（Other drugs for disorders of the musculo - skeletal system）"
},
]

var ATC_n = [
        {
        "name": "N01 麻醉劑（Anesthetics）"
},
        {
        "name": "N02 止痛藥（Analgesics）"
},
        {
        "name": "N03 抗癲癇藥（Antiepileptics）"
},
        {
        "name": "N04 抗帕金森氏藥（Anti - parkinson drugs）"
},
        {
        "name": "N05 精神抑制藥（Psycholeptics）"
},
        {
        "name": "N06 精神興奮藥（Psychoanaleptics）"
},
        {
        "name": "N07 其他神經系統藥品（Other nervous system drugs）"
},
]

var ATC_r = [
        {
        "name": "R01 鼻部用藥（Nasal preparations）"
},
        {
        "name": "R02 喉部用藥（Throat preparations）"
},
        {
        "name": "R03 阻塞性氣道疾病用藥（Drugs for obstructive airway diseases）"
},
        {
        "name": "R05 咳嗽及感冒用藥（Cough and cold preparations）"
},
        {
        "name": "R06 抗組胺藥（Antihistamines for systemic use）"
},
        {
        "name": "R07 其它呼吸系統藥劑（Other respiratory system products"
},
]

var ATC_s = [
        {
        "name": "S01 眼科（Ophthalmologicals）"
},
        {
        "name": "S02 耳科（Otologicals）"
},
        {
        "name": "S03 眼科及耳科製劑（Ophthalmological and otological preparations）"
},
]

var ATC_v = [
        {
        "name": "V01 過敏原（Allergens）"
},
        {
        "name": "V03 其它各種治療用藥品（All other therapeutic products）"
},
        {
        "name": "V04 診斷用藥（Diagnostic agents）"
},
        {
        "name": "V06 一般營養品（General nutrients）"
},
        {
        "name": "V07 其他全部非治療學製品（All other non-therapeutic products）"
},
        {
        "name": "V08 造影劑（Contrast media）"
},
        {
        "name": "V09 診斷用放射性藥物（Diagnostic radiopharmaceuticals"
},
        {
        "name": "V10 治療性放射性藥物（Therapeutic radiopharmaceuticals）"
},
        {
        "name": "V20 外科敷料（Surgical dressings）"
},
]


var ATC_a01 = [
        {
        "name": "A01AA 齲齒預防藥（Caries prophylactic agents）"
},
        {
        "name": "A01AB 口腔局部治療用抗感染藥和滅菌藥（Anti-infectives and antiseptics for local oral treatment）"
},
        {
        "name": "A01AC 口腔局部治療用皮質甾體激素類藥（Corticosteroids for local oral treatment）"
},
        {
        "name": "A01AD 口腔局部治療用其它藥物（Other agents for local oral treatment）"
},
]

var ATC_a02 = [
        {
        "name": "A02AA 鎂化合物類（Magnesium compounds）"
},
        {
        "name": "A02AB 鋁化合物類（Aluminium compounds）"
},
        {
        "name": "A02AC 鈣化合物類（Calcium compounds）"
},
        {
        "name": "A02AD 鋁、鈣和鎂化合物類的複合物及複方（Combinations and complexes of aluminium, calcium and magnesium compounds）"
},
        {
        "name": "A02AF 配有排氣藥的抗酸藥（Antacids with antiflatulents）"
},
        {
        "name": "A02AG 配有解痙藥的抗酸藥（Antacids with antispasmodics）"
},
        {
        "name": "A02AH 配有碳酸氫鈉的抗酸藥（Antacids with sodium bicarbonate）"
},
        {
        "name": "A02AX 抗酸藥，其它複方（Antacids, other combinations）"
},
        {
        "name": "A02BA H2-受體拮抗藥類（H2-receptor antagonists）"
},
        {
        "name": "A02BB 前列腺素類（Prostaglandins）"
},
        {
        "name": "A02BC 質子泵抑制藥（Proton pump inhibitors）"
},
        {
        "name": "A02BD 根除幽門螺旋桿菌的複方（Combinations for eradication of Helicobacter pylori）"
},
        {
        "name": "A02BX 消化道潰瘍和胃食管反流病治療用其它藥物（Other drugs for peptic ulcer and gastro-oesophageal reflux disease (GORD)）"
},
        {
        "name": "A02X 治療與胃酸分泌相關疾病的其它藥物（Other drugs for acid related disorders）"
},
]

var ATC_a03 = [
        {
        "name": "A03AA 合成的抗膽鹼能藥物，帶叔胺基團的酯類（Synthetic anticholinergics, esters with tertiary amino group）"
},
        {
        "name": "A03AB 合成的抗膽鹼能藥物，季銨鹽化合物類（Synthetic anticholinergics, quaternary ammonium compounds）"
},
        {
        "name": "A03AC 合成的解痙藥，帶叔胺的醯胺類（Synthetic antispasmodics, amides with tertiary amines）"
},
        {
        "name": "A03AD 罌粟鹼及其衍生物（Papaverine and derivatives）"
},
        {
        "name": "A03AE 作用於5-羥色胺受體的藥物（Drugs acting on serotonin receptors）"
},
        {
        "name": "A03AX 治療功能性腸道疾病的其它藥物（Other drugs for functional bowel disorders）"
},
        {
        "name": "A03BA 顛茄生物鹼，叔胺類（Belladonna alkaloids, tertiary amines）"
},
        {
        "name": "A03BB 半合成的顛茄生物鹼，季銨鹽類化合物（Belladonna alkaloids, semisynthetic, quaternary ammonium compounds）"
},
        {
        "name": "A03CA 複方中有安定藥的合成抗膽鹼能藥（Synthetic anticholinergic agents in combination with psycholeptics）"
},
        {
        "name": "A03CB 複方中有安定藥的顛茄及其衍生物（Belladonna and derivatives in combination with psycholeptics）"
},
        {
        "name": "A03CC 複方中有安定藥的其它解痙藥（Other antispasmodics in combination with psycholeptics）"
},
        {
        "name": "A03DA 複方中有鎮痛藥的合成抗膽鹼能藥（Synthetic anticholinergic agents in combination with analgesics）"
},
        {
        "name": "A03DB 複方中有鎮痛藥的顛茄及其衍生物（Belladonna and derivatives in combination with analgesics）"
},
        {
        "name": "A03DC 複方中有鎮痛藥的其它解痙藥（Other antispasmodics in combination with analgesics）"
},
        {
        "name": "A03EA 解痙藥、安定藥和鎮痛藥的複方（Antispasmodics, psycholeptics and analgesics in combination）"
},
        {
        "name": "A03ED 複方中有其它藥物的解痙藥（Antispasmodics in combination with other drugs）"
},
        {
        "name": "A03FA 胃腸動力藥（Propulsives）"
},
]

var ATC_a04 = [
        {
        "name": "A04AA 5-羥色胺拮抗藥（Serotonin (5-HT3) antagonists）"
},
        {
        "name": "A04AD 其它鎮吐藥（Other antiemetics）"
},
]

var ATC_a05 = [
        {
        "name": "A05AA 膽酸類（Bile acid preparations）"
},
        {
        "name": "A05AB 膽道疾病治療藥（Preparations for biliary tract therapy）"
},
        {
        "name": "A05AX 膽病的其它治療藥（Other drugs for bile therapy）"
},
        {
        "name": "A05BA 肝病治療藥（Liver therapy）"
},
        {
        "name": "A05C 膽病治療藥和抗脂肪肝藥的複方（Drugs for bile therapy and lipotropics in combination）"
}
]

var ATC_a06 = [
        {
        "name": "A06AA 軟化藥，潤滑藥（Softeners, emollients）"
},
        {
        "name": "A06AB 接觸性輕瀉藥（Contact laxatives）"
},
        {
        "name": "A06AC 本體藥物（Bulk producers）"
},
        {
        "name": "A06AD 滲透作用的輕瀉藥（Osmotically acting laxatives）"
},
        {
        "name": "A06AG 灌腸藥（Enemas）"
},
        {
        "name": "A06AH 外周阿片受體拮抗劑（Peripheral opioid receptor antagonists）"
},
        {
        "name": "A06AX 其它輕瀉藥（Other laxatives）"
},
]

var ATC_a07 = [
        {
        "name": "A07AA 抗生素（Antibiotics）"
},
        {
        "name": "A07AB 磺胺類（Sulfonamides）"
},
        {
        "name": "A07AC 咪唑衍生物（Imidazole derivatives）"
},
        {
        "name": "A07AX 其它腸道抗感染藥（Other intestinal anti-infectives）"
},
        {
        "name": "A07BA 活性炭製劑（Charcoal preparations）"
},
        {
        "name": "A07BB 鉍製劑（Bismuth preparations）"
},
        {
        "name": "A07BC 其它腸道吸附藥（Other intestinal adsorbents）"
},
]

var ATC_a08 = [
        {
        "name": "A08AA 中樞作用的減肥藥品（Centrally acting antiobesity products）"
},
        {
        "name": "A08AB 外周作用的減肥藥（Peripherally acting antiobesity products）"
},
        {
        "name": "A08AX 其它抗肥胖症藥Other antiobesity drugs"
},
]

var ATC_a09 = [
        {
        "name": "A09AA 酶製劑（Enzyme preparations）"
},
        {
        "name": "A09AB 酸製劑（Acid preparations）"
},
        {
        "name": "A09AC 酶和酸製劑，複方（Enzyme and acid preparations, combinations）"
},
]

var ATC_a10 = [
        {
        "name": "A10AB 注射用胰島素及其類似藥物，速效（Insulins and analogues for injection, fast-acting）",
},
        {
        "name": "A10AC 注射用胰島素及其類似藥物，中效（Insulins and analogues for injection, intermediate-acting）",
},
        {
        "name": "A10AD 注射用胰島素及其同系物，中效與快效結合的（Insulins and analogues for injection, intermediate-acting combined with fast-acting）",
},
        {
        "name": "A10AE 注射用胰島素及其類似藥物，長效（Insulins and analogues for injection, long-acting）",
},
        {
        "name": "A10AF 注射用胰島素及其類似藥物（Insulins and analogues for inhalation）",
},
        {
        "name": "A10BA 雙胍類（Biguanides）",
},
        {
        "name": "A10BB 磺胺類，脲衍生物（Sulfonamide, urea derivatives）",
},
        {
        "name": "A10BC 磺胺類，雜環（Sulfonamides (heterocyclic)）",
},
        {
        "name": "A10BD 口服降糖藥複方（Combinations of oral blood glucose lowering drugs）",
},
        {
        "name": "A10BF α-葡萄糖苷酶抑制藥（Alpha glucosidase inhibitors）",
},
        {
        "name": "A10BG 噻唑烷二酮類（Thiazolidinediones）",
},
        {
        "name": "A10BH 二肽基肽酶4(DPP-4)抑制劑（Dipeptidyl peptidase 4 (DPP-4) inhibitors）",
},
        {
        "name": "A10BJ 昇糖素類似胜肽（Glucagon-like peptide-1）"
},
        {
        "name": "A10BK 鈉-葡萄糖共同轉運蛋白2（Sodium-glucose co-transporter 2(SGLT2) inhibitors）"
},
        {
        "name": "A10BX 其它非胰島素類降血糖藥（Other blood glucose lowering drugs, excluding insulins）"
},
        {
        "name": "A10XA 醛糖還原酶抑制藥（Aldose reductase inhibitors）"
}
]

var ATC_a11 = [
        {
        "name": "A11AA 多種維生素和礦物質 Multivitamins with minerals",
},
        {
        "name": "A11AB 多種維生素，其它複方 Multivitamins, other combinations",
},
        {
        "name": "A11BA 多種維生素，單方 Multivitamins, plain",
},
        {
        "name": "A11CA 維生素A，單方 Vitamin A, plain",
},
        {
        "name": "A11CB 維生素A和維生素D的複方 Vitamin A and D in combination",
},
        {
        "name": "A11CC 維生素D及其同系物 Vitamin D and analogues",
},
        {
        "name": "A11DA 維生素B1，單方 Vitamin B1, plain",
},
        {
        "name": "A11DB 維生素B1與維生素B6和/或B12的複方（Vitamin B1 in combination with vitamin B6 and/or vitamin B12）",
},
        {
        "name": "A11EA 複合維生素B，單方 Vitamin B-complex, plain",
},
        {
        "name": "A11EB 複合維生素B與維生素C的複方 Vitamin B-complex with vitamin C",
},
        {
        "name": "A11EC 複合維生素B與礦物質的複方 Vitamin B-complex with minerals",
},
        {
        "name": "A11ED 複合維生素B與同化皮質甾體激素的複方 Vitamin B-complex with anabolic steroids",
},
        {
        "name": "A11EX 複合維生素B的其它複方 Vitamin B-complex, other combinations"
},
        {
        "name": "A11GA 抗壞血酸（維生素C），單方 Ascorbic acid (vitamin C), plain）"
},
        {
        "name": "A11GB 抗壞血酸（維生素C），複方 Ascorbic acid (vitamin C), combinations"
},
        {
        "name": "A11HA 其它單方維生素製劑 Other plain vitamin preparations"
},
        {
        "name": "A11JA 維生素的複方 Combinations of vitamins"
},
        {
        "name": "A11JB 維生素與礦物質 Vitamins with minerals"
},
        {
        "name": "A11JC 維生素，其它複方 Vitamins, other combinations"
}
]

var ATC_a12 = [
        {
        "name": "A12AA 鈣（Calcium）",
},
        {
        "name": "A12AX 鈣與其它藥品的複方（Calcium, combinations with vitamin D and/or other drugs）",
},
        {
        "name": "A12BA 鉀（Potassium）",
},
        {
        "name": "A12CA 鈉（Sodium）",
},
        {
        "name": "A12CB 鋅（Zinc）",
},
        {
        "name": "A12CC 鎂（Magnesium）",
},
        {
        "name": "A12CD 氟化物（Fluoride）",
},
        {
        "name": "A12CE 硒（Selenium）",
},
        {
        "name": "A12CX 其它礦物質藥物（Other mineral products）",
},
]


var ATC_a13 = [
        {
        "name": "A13A 滋補藥",
},
]

var ATC_a14 = [
        {
        "name": "A14AA 雄甾烷衍生物（Androstan derivatives）",
},
        {
        "name": "A14AB 其它同化劑（Estren derivatives）",
},
        {
        "name": "A14B 其它同化劑（Other anabolic agents）",
},
]

var ATC_a15 = [
        {
        "name": "A15  食慾促進劑",
},
]

var ATC_a16 = [
        {
        "name": "A16AA 胺基酸及其衍生物（Amino acids and derivatives）",
},
        {
        "name": "A16AB 酶類（Enzymes）",
},
        {
        "name": "A16AX 各種消化道產物及代謝產物（Various alimentary tract and metabolism products）",
},
]

var ATC_b01 = [
        {
        "name": "B01AA 維生素K拮抗劑（Vitamin K antagonists）",
},
        {
        "name": "B01AB 肝素（Heparin group）",
},
        {
        "name": "B01AC 抗血小板聚集藥，不包括肝素（Platelet aggregation inhibitors excluding heparin））",
},
        {
        "name": "B01AD 酶（Enzymes）",
},
        {
        "name": "B01AE 直接凝血酶抑制劑（Direct thrombin inhibitors）",
},
        {
        "name": "B01AX 其它抗血栓藥（Other antithrombotic agents）",
},
]

var ATC_b02 = [
        {
        "name": "B02AA 胺基酸類（Amino acids）",
},
        {
        "name": "B02AB 蛋白酶抑制藥類（Proteinase inhibitors）",
},
        {
        "name": "B02BA 維生素K（Vitamin K）",
},
        {
        "name": "B02BB 纖維蛋白原（Fibrinogen）",
},
        {
        "name": "B02BC 局部止血藥（Local hemostatics）",
},
        {
        "name": "B02BD 凝血因子類（Blood coagulation factors）",
},
        {
        "name": "B02BX 其它系統止血藥（Other systemic hemostatics）",
},
]

var ATC_b03 = [
        {
        "name": "B03AA 口服二價鐵製劑（Iron bivalent, oral preparations）",
},
        {
        "name": "B03AB 口服三價鐵製劑（Iron trivalent, oral preparations）",
},
        {
        "name": "B03AC 非腸道用藥的三價鐵製劑（Iron trivalent, parenteral preparations）",
},
        {
        "name": "B03AD 鐵與葉酸的複方Iron in combination with folic acid",
},
        {
        "name": "B03AE 鐵與其它藥品的複方Iron in other combinations",
},
        {
        "name": "B03BA 維生素B12（氰鈷胺及其類似藥物）（Vitamin B12 (cyanocobalamin and analogues)）",
},
        {
        "name": "B03BB 葉酸及其衍生物（Folic acid and derivatives）",
},
        {
        "name": "B03XA 其它抗貧血藥（Other antianemic preparations）",
},
]

var ATC_b05 = [
        {
        "name": "B05AA 血液代用品和血漿蛋白成分（Blood substitutes and plasma protein fractions）",
},
        {
        "name": "B05AX 其它血液藥品（Other blood products）",
},
        {
        "name": "B05BA 非經腸營養液（Solutions for parenteral nutrition）",
},
        {
        "name": "B05BB 調節電解質平衡的溶液（Solutions affecting the electrolyte balance）",
},
        {
        "name": "B05BC 產生滲透利尿作用的溶液（Solutions producing osmotic diuresis）",
},
        {
        "name": "B05CA 抗感染藥（Antiinfectives）",
},
        {
        "name": "B05CB 鹽溶液（Salt solutions）",
},
        {
        "name": "B05CX 其它灌注液（Other irrigating solutions）",
},
        {
        "name": "B05DA 等滲溶液（Isotonic solutions）",
},
        {
        "name": "B05DB 高滲溶液（Hypertonic solutions）",
},
        {
        "name": "B05XA 電解質溶液（Electrolyte solutions）",
},
        {
        "name": "B05XB 胺基酸類（Amino acids）",
},
        {
        "name": "B05XC 維生素類（Vitamins）",
},
        {
        "name": "BB05XX 其它靜脈注射液添加藥（Other i.v. solution additives）",
},
        {
        "name": "B05ZA 血液透析（Hemodialytics, concentrates）",
},
        {
        "name": "B05ZB 血液過濾（Hemofiltrates）",
},
]

var ATC_b06 = [
        {
        "name": "B06AA 酶類（Enzymes）",
},
        {
        "name": "B06AB 其它血紅素製品（Other hematological products）",
},
        {
        "name": "B06AC 遺傳性血管性水腫藥物（Drugs used in hereditary angioedema）",
},
]

var ATC_c01 = [
        {
        "name": "C01AA 洋地黃苷類（Digitalis glycosides）",
},
        {
        "name": "C01AB 海蔥苷類（Scilla glycosides）",
},
        {
        "name": "C01AC 毒毛旋花苷類（Strophantus glycosides）",
},
        {
        "name": "C01AX 其它強心苷類（Other cardiac glycosides）",
},
        {
        "name": "C01BA 抗心律失常藥,Ⅰa類（Antiarrhythmics, class Ia）",
},
        {
        "name": "C01BB 抗心律失常藥,Ⅰb類（Antiarrhythmics, class Ib）",
},
        {
        "name": "C01BC 抗心律失常藥,Ⅰc類（Antiarrhythmics, class Ic）",
},
        {
        "name": "C01BD 抗心律失常藥,Ⅲ類（Antiarrhythmics, class III）",
},
        {
        "name": "C01BG 其它I 類抗心律失常藥（Other antiarrhythmics, class I and III）",
},
        {
        "name": "C01CA 腎上腺素能和多巴胺能藥（Adrenergic and dopaminergic agents）",
},
        {
        "name": "C01CE 磷酸二酯酶抑制藥（Phosphodiesterase inhibitors）",
},
        {
        "name": "C01CX 其它心臟刺激藥（Other cardiac stimulants）",
},
        {
        "name": "C01DA 有機硝酸酯類（Organic nitrate nitrates）",
},
        {
        "name": "C01DB 喹啉類血管舒張藥（Quinolone vasodilators）",
},
        {
        "name": "C01DX 治療心臟病用其它血管舒張藥（Other vasodilators used in cardiac diseases）",
},
        {
        "name": "C01EA 前列腺素類（Prostaglandins）",
},
        {
        "name": "C01EB 其它心臟病用藥（Other cardiac preparations）",
},
        {
        "name": "C01EX 治療心臟病用的其它複方藥物（Other cardiac combination products）",
},
]

var ATC_c02 = [
        {
        "name": "C02AA 蛇根木生物鹼類（Rauwolfia alkaloids）",
},
        {
        "name": "C02AB 甲基多巴類（Methyldopa）",
},
        {
        "name": "C02AC 咪唑啉受體激動藥（Imidazoline receptor agonists）",
},
        {
        "name": "C02BA 鋶衍生物（Sulfonium derivatives）",
},
        {
        "name": "C02BB 仲胺和叔胺類（Secondary and tertiary amines）",
},
        {
        "name": "C02BC 雙季銨鹽化合物（Bisquaternary ammonium compounds）",
},
        {
        "name": "C02CA α-腎上腺素受體拮抗藥（Alpha-adrenoreceptor antagonists）",
},
        {
        "name": "C02CC 胍衍生物（Guanidine derivatives）",
},
        {
        "name": "C02DA 噻嗪衍生物（Thiazide derivatives）",
},
        {
        "name": "C02DB 肼酞嗪衍生物（Hydrazinophthalazine derivatives）",
},
        {
        "name": "C02DC 嘧啶衍生物（Pyrimidine derivatives）",
},
        {
        "name": "C02DD 亞硝基鐵氰化物衍生物（Nitroferricyanide derivatives）",
},
        {
        "name": "C02DG 胍衍生物（Guanidine derivatives）",
},
        {
        "name": "C02KA 非蛇根木類生物鹼（Alkaloids, excluding rauwolfia）",
},
        {
        "name": "C02KB 酪氨酸羥化酶抑制藥（Tyrosine hydroxylase inhibitors）",
},
        {
        "name": "C02KC 單胺氧化酶抑制藥（MAO inhibitors）",
},
        {
        "name": "C02KD 5-羥色胺拮抗藥（Serotonin antagonists）",
},
        {
        "name": "C02KX 其它抗高血壓藥（Other antihypertensives）",
},
        {
        "name": "C02LA 蛇根木生物鹼和利尿藥的複方（Rauwolfia alkaloids and diuretics in combination）",
},
        {
        "name": "C02LB 甲基多巴和利尿藥複方（Methyldopa and diuretics in combination）",
},
        {
        "name": "C02LC 咪唑啉受體激動藥與利尿藥複方（Imidazoline receptor agonists in combination with diuretics）",
},
        {
        "name": "C02LE α-腎上腺素受體拮抗藥和利尿藥（Alpha-adrenoreceptor antagonists and diuretics）",
},
        {
        "name": "C02LF 胍衍生物和利尿藥（Guanidine derivatives and diuretics）",
},
        {
        "name": "C02LG 肼酞嗪衍生物和利尿藥（Hydrazinophthalazine derivatives and diuretics）",
},
        {
        "name": "C02LK 非蛇根木類生物鹼和利尿藥的複方（Alkaloids, excluding rauwolfia, in combination with diuretics）",
},
        {
        "name": "C02LL 單胺氧化酶抑制藥和利尿藥（MAO inhibitors and diuretics）",
},
        {
        "name": "C02LN 5-羥色胺拮抗藥和利尿藥（Serotonin antagonists and diuretics）",
},
        {
        "name": "C02LX 其它抗高血壓藥和利尿藥（Other antihypertensives and diuretics）",
},
        {
        "name": "C02N 抗高血壓藥的複方（Combinations of antihypertensives in ATC-group C02）",
},
]

var ATC_c03 = [
        {
        "name": "C03AA 噻嗪類,單方（Thiazides, plain）",
},
        {
        "name": "C03AB 噻嗪類和鉀複方（Thiazides and potassium in combination）",
},
        {
        "name": "C03AH 噻嗪類利尿藥與安定藥和/或鎮痛藥的複方（Thiazides, combinations with psycholeptics and/or analgesics）",
},
        {
        "name": "C03AX 噻嗪類利尿藥與其它藥物的複方（Thiazides, combinations with other drugs）",
},
        {
        "name": "C03BA 磺胺類,單方（Sulfonamides, plain）",
},
        {
        "name": "C03BB 磺胺類利尿藥與鉀的複方（Sulfonamides and potassium in combination）",
},
        {
        "name": "C03BC 汞類利尿藥（Mercurial diuretics）",
},
        {
        "name": "C03BD 黃嘌呤衍生物（Xanthine derivatives）",
},
        {
        "name": "C03BK 磺胺類利尿藥與其它藥物的複方（Sulfonamides, combinations with other drugs）",
},
        {
        "name": "C03BX 其它低限量利尿藥（Other low-ceiling diuretics）",
},
        {
        "name": "C03CA 磺胺類,單方（Sulfonamides, plain）",
},
        {
        "name": "C03CB 磺胺類利尿藥與鉀的複方（Sulfonamides and potassium in combination）",
},
        {
        "name": "C03CC 芳氧基乙酸衍生物（Aryloxyacetic acid derivatives）",
},
        {
        "name": "C03CD 吡唑酮衍生物（Pyrazolone derivatives）",
},
        {
        "name": "C03CX 其它高限量衍生物（Other high-ceiling diuretics）",
},
        {
        "name": "C03DA 醛甾酮拮抗藥（Aldosterone antagonists）",
},
        {
        "name": "C03DB 其它保鉀藥（Other potassium-sparing agents）",
},
        {
        "name": "C03EA 低限量利尿藥和保鉀藥的複方（Low-ceiling diuretics and potassium-sparing agents）",
},
        {
        "name": "C03EB 高限量利尿藥和保鉀藥的複方（High-ceiling diuretics and potassium-sparing agents）",
},
        {
        "name": "C03XA 加壓素拮抗劑（Vasopressin antagonists）",
},
]

var ATC_c04 = [
        {
        "name": "C04AA 2-氨基-1-苯基乙醇衍生物（2-amino-1-phenylethanol derivatives）",
},
        {
        "name": "C04AB 咪唑啉衍生物（Imidazoline derivatives）",
},
        {
        "name": "C04AC 煙酸及其衍生物（Nicotinic acid and derivatives）",
},
        {
        "name": "C04AD 嘌呤衍生物（Purine derivatives）",
},
        {
        "name": "C04AE 麥角生物鹼類（Ergot alkaloids）",
},
        {
        "name": "C04AF 酶",
},
        {
        "name": "C04AX 其它外周血管擴張劑（Other peripheral vasodilators）",
},
]

var ATC_c05 = [
        {
        "name": "C05AA 皮質類固醇類（Corticosteroids））",
},
        {
        "name": "C05AB 抗生素（Antibiotics）",
},
        {
        "name": "C05AD 局部麻醉藥（Local anesthetics）",
},
        {
        "name": "C05AE 肌松藥（Muscle relaxants））",
},
        {
        "name": "C05AX 治療痔瘡和肛裂的其它外用藥（Other agents for treatment of hemorrhoids and anal fissures for topical use）",
},
        {
        "name": "C05BA 局部用藥的肝素或類肝素（Heparins or heparinoids for topical use）",
},
        {
        "name": "C05BB 局部注射用硬化藥（injection）",
},
        {
        "name": "C05BX 其它硬化藥（Other sclerosing agents）",
},
        {
        "name": "C05CA 生物黃酮素類（Bioflavonoids）",
},
        {
        "name": "C05CX 其它毛細血管穩定藥（Other capillary stabilising agents）",
},
]

var ATC_c07 = [
        {
        "name": "C07AA 非選擇性β受體阻滯藥（Beta blocking agents, non-selective）",
},
        {
        "name": "C07AB 選擇性β受體阻斷藥（Beta blocking agents, selective）",
},
        {
        "name": "C07AG α和β受體阻斷藥（Alpha and beta blocking agents）",
},
        {
        "name": "C07BA 非選擇性β受體阻斷藥和噻嗪類利尿藥的複方（Beta blocking agents, non-selective, and thiazides）",
},
        {
        "name": "C07BB 選擇性β受體阻斷藥和噻嗪類利尿藥的複方（Beta blocking agents, selective, and thiazides）",
},
        {
        "name": "C07BG Alpha and beta blocking agents and thiazides",
},
        {
        "name": "C07CA 非選擇性β受體阻斷藥和其它利尿藥的複方（Beta blocking agents, non-selective, and other diuretics）",
},
        {
        "name": "C07CB 選擇性β受體阻斷藥和其它利尿藥的複方（Beta blocking agents, selective, and other diuretics）",
},
        {
        "name": "C07CG α和β受體阻斷藥與其它利尿藥的複方（Alpha and beta blocking agents and other diuretics）",
},
        {
        "name": "C07DA 非選擇性β受體阻斷藥、噻嗪類利尿藥和其它利尿藥的複方（Beta blocking agents, non-selective, thiazides and other diuretics）",
},
        {
        "name": "C07DB 選擇性β受體阻斷藥、噻嗪類利尿藥和其它利尿藥的複方（Beta blocking agents, selective, thiazides and other diuretics）",
},
        {
        "name": "C07EA 非選擇性β受體阻斷藥和血管舒張藥（Beta blocking agents, non-selective, and vasodilators）",
},
        {
        "name": "C07EB 選擇性β受體阻斷藥和血管舒張藥（Beta blocking agents, selective, and vasodilators）",
},
        {
        "name": "C07FA 非選擇性β受體阻斷藥和其它抗高血壓藥（Beta blocking agents, non-selective, and other antihypertensives）",
},
        {
        "name": "C07FB 選擇性β受體阻斷藥和其它抗高血壓藥（Beta blocking agents, selective, and other antihypertensives）",
},
]

var ATC_c08 = [
        {
        "name": "C08CA 二氫吡啶衍生物（Dihydropyridine derivatives）",
},
        {
        "name": "C08CX 主要對血管產生影響的其它選擇性鈣通道阻斷藥（Other selective calcium channel blockers with mainly vascular effects）",
},
        {
        "name": "C08DA 苯基烷基胺衍生物（Phenylalkylamine derivatives）",
},
        {
        "name": "C08DB 苯並硫卓衍生物（Benzothiazepine derivatives）",
},
        {
        "name": "C08EA 苯基烷基胺衍生物（Phenylalkylamine derivatives）",
},
        {
        "name": "C08EX 其它非選擇性鈣通道阻斷藥（Other non-selective calcium channel blockers）",
},
        {
        "name": "C08GA 鈣通道阻斷藥和利尿藥（Calcium channel blockers and diuretics）",
},
]

var ATC_c09 = [
        {
        "name": "C09AA 血管緊張素轉化酶抑制抑制藥，單方ACE inhibitors, plain",
},
        {
        "name": "C09BA 血管緊張素轉化酶抑制抑制藥和利尿藥（ACE inhibitors and diuretics）",
},
        {
        "name": "C09BB 血管緊張素轉化酶抑制抑制藥和鈣通道阻斷藥（ACE inhibitors and calcium channel blockers）",
},
        {
        "name": "C09CA 血管緊張素II拮抗藥，單方（Angiotensin II antagonists, plain）",
},
        {
        "name": "C09DA 血管緊張素II拮抗藥和利尿藥（Angiotensin II antagonists and diuretics）",
},
        {
        "name": "C09DB 血管緊張素II拮抗藥和鈣通道阻滯藥（Angiotensin II antagonists and calcium channel blockers）",
},
        {
        "name": "C09DX 血管緊張素Ⅱ拮抗劑，其他複方（Angiotensin II antagonists, other combinations）",
},
        {
        "name": "C09XA 腎素-抑制藥（Renin-inhibitors）",
},
]

var ATC_c10 = [
        {
        "name": "C10AA β-羥基-β-甲基戊二酸單醯輔酶A還原酶抑制藥（HMG CoA reductase inhibitors）",
},
        {
        "name": "C10AB 貝特類（Fibrates）",
},
        {
        "name": "C10AC 膽酸螯合劑（Bile acid sequestrants））",
},
        {
        "name": "C10AD 煙酸及其衍生物（Nicotinic acid and derivatives）",
},
        {
        "name": "C10AX 其它血脂調節劑（Other lipid modifying agents）",
},
        {
        "name": "C10BA 與其它血脂調節劑組方的HMG CoA還原酶抑制劑（HMG CoA reductase inhibitors in combination with other lipid modifying agents）",
},
        {
        "name": "C10BX HMG CoA還原酶抑制劑，其它複方（HMG CoA reductase inhibitors, other combinations）",
},
]

var ATC_d01 = [
        {
        "name": "D01AA 抗生素類（Antibiotics）",
},
        {
        "name": "D01AC 咪唑和三唑衍生物（Imidazole and triazole derivatives）",
},
        {
        "name": "D01AE 局部用其它抗真菌藥（Other antifungals for topical use）",
},
        {
        "name": "D01BA 系統用抗真菌藥（Antifungals for systemic use）",
},
]

var ATC_d02 = [
        {
        "name": "D02AA 矽酮類（Silicone products）",
},
        {
        "name": "D02AB 鋅類（Zinc products）",
},
        {
        "name": "D02AC 軟石蠟和脂肪類（Soft paraffin and fat products）",
},
        {
        "name": "D02AD 液膏類（Liquid plasters）",
},
        {
        "name": "D02AE 脲類（Carbamide products）",
},
        {
        "name": "D02AF 水楊酸製劑（Salicylic acid preparations）",
},
        {
        "name": "D02AX 其它潤膚藥和護膚藥（Other emollients and protectives）",
},
        {
        "name": "D02BA 局部用紫外線防護藥（Protectives against UV-radiation for topical use）",
},
        {
        "name": "D02BB 系統用紫外線防護藥（Protectives against UV-radiation for systemic use）",
},
]

var ATC_d03 = [
        {
        "name": "D03AA 鱈魚肝油軟膏Cod-liver oil ointments",
},
        {
        "name": "D03AX 其它結瘢藥（Other cicatrizants））",
},
        {
        "name": "D03BA 蛋白水解酶類（Proteolytic enzymes）",
},
]

var ATC_d04 = [
        {
        "name": "D04AA 局部用抗組胺藥（Antihistamines for topical use）",
},
        {
        "name": "D04AB 局部麻醉藥（Anesthetics for topical use）",
},
        {
        "name": "D04AX 其它止癢藥（Other antipruritics）",
},
]

var ATC_d05 = [
        {
        "name": "D05AA 焦油（Tars）",
},
        {
        "name": "D05AC 蒽衍生物（Antracen derivatives））",
},
        {
        "name": "D05AD 局部用補骨脂素類（Psoralens for topical use）",
},
        {
        "name": "D05AX 其它局部用治療牛皮癬藥Other antipsoriatics for topical use）",
},
        {
        "name": "D05BA 系統用補骨脂素類（Psoralens for systemic use）",
},
        {
        "name": "D05BB 維生素治療牛皮癬（Retinoids for treatment of psoriasis）",
},
        {
        "name": "D05BX 其它系統用抗牛皮癬藥（Other antipsoriatics for systemic use）",
},
]

var ATC_d06 = [
        {
        "name": "D06AA 四環素及其衍生物（Tetracycline and derivatives）",
},
        {
        "name": "D06AX 局部用其它抗生素（Other antibiotics for topical use）",
},
        {
        "name": "D06BA 磺胺類（Sulfonamides）",
},
        {
        "name": "D06BB 抗病毒藥（Antivirals）",
},
        {
        "name": "D06BX 其它化療藥（Other chemotherapeutics）",
},
        {
        "name": "D06C 抗生素和化療藥，複方（Antibiotics and chemotherapeutics, combinations）",
},
]

var ATC_d07 = [
        {
        "name": "D07AA 皮質類固醇類，弱（I組）（Corticosteroids, weak (group I)）",
},
        {
        "name": "D07AB 皮質類固醇類，中強（II 組）（Corticosteroids, moderately potent (group II)）",
},
        {
        "name": "D07AC 皮質類固醇類，強（III 組）Corticosteroids, potent (group III)",
},
        {
        "name": "D07AD 皮質類固醇類，高強（IV 組）（Corticosteroids, very potent (group IV)）",
},
        {
        "name": "D07BA 弱皮質甾體激素類，與滅菌藥的複方（Corticosteroids, weak, combinations with antiseptics）",
},
        {
        "name": "D07BB 較強皮質甾體激素類，與滅菌藥的複方（Corticosteroids, moderately potent, combinations with antiseptics）",
},
        {
        "name": "D07BC 強皮質甾體激素類，與滅菌藥的複方（Corticosteroids, potent, combinations with antiseptics）",
},
        {
        "name": "D07BD 高強性皮質類固醇類，與滅菌藥的複方（Corticosteroids, very potent, combinations with antiseptics）",
},
        {
        "name": "D07CA 弱皮質甾體激素類，與抗生素的複方（Corticosteroids, weak, combinations with antibiotics）",
},
        {
        "name": "D07CB 較強皮質甾體激素類，與抗生素的複方（Corticosteroids, moderately potent, combinations with antibiotics）",
},
        {
        "name": "D07CC 強皮質甾體激素類，與抗生素的複方（Corticosteroids, potent, combinations with antibiotics）",
},
        {
        "name": "D07CD 很強的皮質甾體激素類，與抗生素的複方（Corticosteroids, very potent, combinations with antibiotics）",
},
        {
        "name": "D07XA 弱皮質甾體激素類，與其它藥物的複方（Corticosteroids, weak, other combinations）",
},
        {
        "name": "D07XB 較強的皮質甾體激素類，與其它藥物的複方（Corticosteroids, moderately potent, other combinations）",
},
        {
        "name": "D07XC 強的皮質甾體激素類，與其它藥物的複方（Corticosteroids, potent, other combinations）",
},
        {
        "name": "D07XD 很強的皮質甾體激素類，與其它藥物的複方（Corticosteroids, very potent, other combinations）",
},
]

var ATC_d08 = [
        {
        "name": "D08AA 吖啶衍生物（Acridine derivatives）",
},
        {
        "name": "D08AB 鋁製劑類（Aluminium agents）",
},
        {
        "name": "D08AC 雙胍類和脒類（Biguanides and amidines）",
},
        {
        "name": "D08AD 硼酸類（Boric acid products）",
},
        {
        "name": "D08AE 苯酚及其衍生物（Phenol and derivatives）",
},
        {
        "name": "D08AF 硝基呋喃衍生物（Nitrofuran derivatives）",
},
        {
        "name": "D08AG 碘製劑（Iodine products）",
},
        {
        "name": "D08AH 喹啉衍生物（Quinoline derivatives）",
},
        {
        "name": "D08AJ 季銨鹽類化合物（Quaternary ammonium compounds）",
},
        {
        "name": "D08AK 汞製劑類（Mercurial products）",
},
        {
        "name": "D08AL 銀化合物類（Silver compounds）",
},
        {
        "name": "D08AX 其它消毒滅菌藥（Other antiseptics and disinfectants）",
},
]

var ATC_d09 = [
        {
        "name": "D09AA 敷料軟膏中用的抗感染藥（Medicated dressings with antiinfectives）",
},
        {
        "name": "D09AB 鋅繃帶（Zinc bandages）",
},
        {
        "name": "D09AX 軟石蠟繃帶（Soft paraffin dressings）",
},
]

var ATC_d10 = [
        {
        "name": "D10AA 皮質甾體激素類，治療痤瘡的複方（Corticosteroids, combinations for treatment of acne）",
},
        {
        "name": "D10AB 含硫藥物（Preparations containing sulfur）",
},
        {
        "name": "D10AD 局部用於治療痤瘡的（Retinoids for topical use in acne）",
},
        {
        "name": "D10AE 過氧化物類（Peroxides）",
},
        {
        "name": "D10AF 治療痤瘡用的抗感染藥（Anti-infectives for treatment of acne）",
},
        {
        "name": "D10AX 其它局部用的抗痤瘡藥（Other anti-acne preparations for topical use）",
},
        {
        "name": "D10BA 治療痤瘡的（Retinoids for treatment of acne）",
},
        {
        "name": "D10BX 其它系統用抗痤瘡藥（Other anti-acne preparations for systemic use）",
},
]

var ATC_d11 = [
        {
        "name": "D11AA 止汗藥（Antihidrotics）",
},
        {
        "name": "D11AC 醫用洗髮劑（Medicated shampoos）",
},
        {
        "name": "D11AE 局部用雄激素（Androgens for topical use）",
},
        {
        "name": "D11AF 疣和雞眼治療藥（Wart and corn preparations）",
},
        {
        "name": "D11AH 過敏性皮炎治療藥，不包括皮質類固醇（Agents for dermatitis, excluding corticosteroids）",
},
        {
        "name": "D11AX 其它皮膚病用藥（Other dermatologicals））",
},
]

var ATC_g01 = [
        {
        "name": "G01AA Antibiotics",
},
        {
        "name": "G01AB Arsenic compounds",
},
        {
        "name": "G01AC Quinoline derivatives）",
},
        {
        "name": "G01AD Organic acids",
},
        {
        "name": "G01AE Sulfonamides",
},
        {
        "name": "G01AF Imidazole derivatives",
},
        {
        "name": "G01AG Triazole derivatives",
},
        {
        "name": "G01AX Other antiinfectives and antiseptics",
},
        {
        "name": "G01BA Antibiotics and corticosteroids",
},
        {
        "name": "G01BC Quinoline derivatives and corticosteroids",
},
        {
        "name": "G01BD Antiseptics and corticosteroids",
},
        {
        "name": "G01BE Sulfonamides and corticosteroids",
},
        {
        "name": "G01BF Imidazole derivatives and corticosteroids",
},
]

var ATC_g02 = [
        {
        "name": "G02AB Ergot alkaloids",
},
        {
        "name": "G02AC Ergot alkaloids and oxytocin incl. analogues, in combination",
},
        {
        "name": "G02AD Prostaglandins",
},
        {
        "name": "G02AX Other uterotonics",
},
        {
        "name": "G02BA Intrauterine contraceptives",
},
        {
        "name": "G02BB Intravaginal contraceptives",
},
        {
        "name": "G02CA Sympathomimetics, labour repressants",
},
        {
        "name": "G02CB Prolactine inhibitors",
},
        {
        "name": "G02CC Antiinflammatory products for vaginal administrations",
},
        {
        "name": "G02CX Other gynecologicals",
},
]

var ATC_g03 = [
        {
        "name": "G03AA Progestogens and estrogens, fixed combinations",
},
        {
        "name": "G03AB Progestogens and estrogens, sequential preparations",
},
        {
        "name": "G03AC Progestogens"
},
        {
        "name": "G03AD Emergency contraceptives",
},
        {
        "name": "G03BA 3-oxoandrosten (4) derivatives",
},
        {
        "name": "G03BB 5-androstanon (3) derivatives",
},
        {
        "name": "G03CA Natural and semisynthetic estrogens, plain",
},
        {
        "name": "G03CB Synthetic estrogens, plain",
},
        {
        "name": "G03CC Estrogens, combinations with other drugs",
},
        {
        "name": "G03CX Other estrogens",
},
        {
        "name": "G03DA Pregnen (4) derivatives",
},
        {
        "name": "G03DB Pregnadien derivatives",
},
        {
        "name": "G03DC Estren derivatives",
},
        {
        "name": "G03EA Androgens and estrogens",
},
        {
        "name": "G03EB Androgen, progestogen and estrogen in combination",
},
        {
        "name": "G03EK Androgens and female sex hormones in combination with other drugs",
},
        {
        "name": "G03FA Progestogens and estrogens, fixed combinations",
},
        {
        "name": "G03FB Progestogens and estrogens, sequential preparations",
},
        {
        "name": "G03GA Gonadotropinss",
},
        {
        "name": "G03GB Ovulation stimulants, synthetic",
},
        {
        "name": "G03HA Antiandrogens, plain",
},
        {
        "name": "G03HB Antiandrogens and estrogens ",
},
        {
        "name": "G03X OTHER SEX HORMONES AND MODULATORS OF THE GENITAL SYSTEM",
},
]

var ATC_g04 = [
        {
        "name": "G04BA Acidifiers",
},
        {
        "name": "G04BC Urinary concrement solvents",
},
        {
        "name": "G04BD Drugs for urinary frequency and incontinence"
},
        {
        "name": "G04BE Drugs used in erectile dysfunction",
},
        {
        "name": "G04BX Other urologicals",
},
        {
        "name": "G04CA Alpha-adrenoreceptor antagonists",
},
        {
        "name": "G04CB Testosterone-5-alpha reductase inhibitorsn",
},
        {
        "name": "G04CX Other drugs used in benign prostatic hypertrophy",
}
]

var ATC_h01 = [
        {
        "name": "H01AA ACTH",
},
        {
        "name": "H01AB Thyrotropin",
},
        {
        "name": "H01AC Somatropin and somatropin agonists"
},
        {
        "name": "H01AX Other anterior pituitary lobe hormones and analogues",
},
        {
        "name": "H01BA Vasopressin and analogues",
},
        {
        "name": "H01BB Oxytocin and analogues",
},
        {
        "name": "H01CA Gonadotropin-releasing hormones",
},
        {
        "name": "H01CB Somatostatin and analogues",
},
        {
        "name": "H01CC Anti-gonadotropin-releasing hormones",
}
]

var ATC_h02 = [
        {
        "name": "H02AA Mineralocorticoids",
},
        {
        "name": "H02AB Glucocorticoids",
},
        {
        "name": "H02BX Corticosteroids for systemic use, combinations"
},
        {
        "name": "H02CA Anticorticosteroids",
},
]

var ATC_h03 = [
        {
        "name": "H03AA Thyroid hormones",
},
        {
        "name": "H03BA Thiouracils",
},
        {
        "name": "H03BB Sulfur-containing imidazole derivatives"
},
        {
        "name": "H03BC Perchlorates",
},
        {
        "name": "H03BX Other antithyroid preparations",
},
        {
        "name": "H03CA Iodine therapy",
},
]

var ATC_h04 = [
        {
        "name": "H04AA Glycogenolytic hormones",
},
]

var ATC_h05 = [
        {
        "name": "H05AA Parathyroid hormones and analogues",
},
        {
        "name": "H05BA Calcitonin preparations",
},
        {
        "name": "H05BX Other anti-parathyroid agents,"
},
]

var ATC_j01 = [
        {
        "name": "J01AA 四環素類（Tetracyclines）",
},
        {
        "name": "J01BA 醯胺醇類（Amphenicols）",
},
        {
        "name": "J01CA 廣譜青黴素類（Penicillins with extended spectrum）"
},
        {
        "name": "J01CE β-內醯胺酶敏感的青黴素類（Beta-lactamase-sensitive penicillins）",
},
        {
        "name": "J01CF 耐β-內醯胺酶的青黴素類（Beta-lactamase-resistant penicillins）",
},
        {
        "name": "J01CG β-內醯胺酶抑制藥（Beta-lactamase inhibitors）"
},
        {
        "name": "J01CR 青黴素（含β-內醯胺酶抑制劑）類的複方（Combinations of penicillins, including beta-lactamase inhibitors）",
},
        {
        "name": "J01DB 第一代頭孢菌素（First-generation cephalosporins）",
},
        {
        "name": "J01DC 第二代頭孢菌素（Second-generation cephalosporins）"
},
        {
        "name": "J01DD 第三代頭孢菌素（Third-generation cephalosporins）",
},
        {
        "name": "J01DE 第四代頭孢菌素（Fourth-generation cephalosporins）",
},
        {
        "name": "J01DF 單環β-內醯胺類（Monobactams）"
},
        {
        "name": "J01DH 碳青黴烯類（Carbapenems）",
},
        {
        "name": "J01DI 其它頭孢菌素（Other cephalosporins）"
},
        {
        "name": "J01EA 甲氧苄啶及其衍生物（Trimethoprim and derivatives）",
},
        {
        "name": "J01EB 短效磺胺類（Short-acting sulfonamides）",
},
        {
        "name": "J01EC 中效磺胺類（Intermediate-acting sulfonamides）"
},
        {
        "name": "J01ED 長效磺胺類（Long-acting sulfonamides）",
},
        {
        "name": "J01EE 磺胺類和甲氧苄啶（含其衍生物）的複方（Combinations of sulfonamides and trimethoprim, including derivatives）"
},
        {
        "name": "J01FA 大環內酯類（Macrolides）",
},
        {
        "name": "J01FF 林可醯胺類（Lincosamides）",
},
        {
        "name": "J01FG 鏈霉殺陽菌素類（Streptogramins）"
},
        {
        "name": "J01GA 鏈黴素類（Streptomycins）",
},
        {
        "name": "J01GB 其它氨基糖苷類（Other aminoglycosides）"
},
        {
        "name": "J01MA 氟喹諾酮類（Fluoroquinolones）"
},
        {
        "name": "J01MB 其它喹諾酮類（Other quinolones））",
},
        {
        "name": "J01RA 抗菌藥複方（Combinations of antibacterials）"
},
        {
        "name": "J01XA 糖肽類抗菌藥（Glycopeptide antibacterials）"
},
        {
        "name": "J01XB 多粘菌素類（Polymyxins）"
},
        {
        "name": "J01XC 甾體類抗菌藥（Steroid antibacterials））"
},
        {
        "name": "J01XD 咪唑衍生物（Imidazole derivatives）"
},
        {
        "name": "J01XE 硝基呋喃衍生物（Nitrofuran derivatives）"
},
        {
        "name": "J01XX 其它抗菌藥（Other antibacterials）"
},
]

var ATC_j02 = [
        {
        "name": "J02AA 抗生素類（Antibiotics）",
},
        {
        "name": "J02AB 咪唑衍生物類（Imidazole derivatives）",
},
        {
        "name": "J02AC 三唑衍生物類（Triazole derivatives）"
},
        {
        "name": "J02AX 其它系統用藥的抗真菌藥（Other antimycotics for systemic use）",
},
]

var ATC_j04 = [
        {
        "name": "J04AA 氨基水楊酸及其衍生物類（Aminosalicylic acid and derivatives）",
},
        {
        "name": "J04AB 抗生素類（Antibiotics）",
},
        {
        "name": "J04AC 醯肼類（Hydrazides）"
},
        {
        "name": "J04AD 硫脲衍生物類（Thiocarbamide derivatives）",
},
        {
        "name": "J04AK 其它頓挫性結核治療用藥（Other drugs for treatment of tuberculosis）",
},
        {
        "name": "J04AM 頓挫性結核治療用藥的複方（Combinations of drugs for treatment of tuberculosis）",
},
        {
        "name": "J04BA 麻風病治療用藥（Drugs for treatment of lepra）"
},
]
var ATC_j05 = [
        {
        "name": "J05AA 縮氨硫脲類（Thiosemicarbazones）",
},
        {
        "name": "J05AB 核苷類和核苷酸類藥，逆轉錄酶抑制藥除外（Nucleosides and nucleotides excluding reverse transcriptase inhibitors）",
},
        {
        "name": "J05AC 環胺類（Cyclic amines）"
},
        {
        "name": "J05AD 膦酸衍生物類（Phosphonic acid derivatives）",
},
        {
        "name": "J05AE 蛋白酶抑制劑（Protease inhibitors）",
},
        {
        "name": "J05AF 核苷類和核苷酸類逆轉錄酶抑制劑（Nucleoside and nucleotide reverse transcriptase inhibitors）",
},
        {
        "name": "J05AG 非核苷類逆轉錄酶抑制劑（Non-nucleoside reverse transcriptase inhibitors）"
},
        {
        "name": "J05AH 神經氨酸苷酶抑制藥（Neuraminidase inhibitors）"
},
        {
        "name": "J05AR 治療HIV感染的抗病毒藥，複方（Antivirals for treatment of HIV infections, combinations）"
},
        {
        "name": "J05AX 其它抗病毒藥（Other antivirals）"
},
]

var ATC_j06 = [
        {
        "name": "J06AA 免疫血清類（Immune sera）",
},
        {
        "name": "J06BA 標準的人免疫球蛋白（Immunoglobulins, normal human）",
},
        {
        "name": "J06BB 特種免疫球蛋白（Specific immunoglobulins）"
},
        {
        "name": "J06BC 其它免疫球蛋白類（Other immunoglobulins）",
},
]

var ATC_j07 = [
        {
        "name": "J07AC 炭疽疫苗（Anthrax vaccines）",
},
        {
        "name": "J07AD 布魯氏桿菌病疫苗（Brucellosis vaccines）",
},
        {
        "name": "J07AE 霍亂疫苗（Cholera vaccines）"
},
        {
        "name": "J07AF 白喉疫苗（Diphtheria vaccines）",
},
        {
        "name": "J07AG 乙型流感嗜血桿菌疫苗（Haemophilus influenzae B vaccines）",
},
        {
        "name": "J07AH 腦膜炎球菌病疫苗（Meningococcal vaccines）",
},
        {
        "name": "J07AJ 百日咳疫苗（Pertussis vaccines）"
},
        {
        "name": "J07AK 鼠疫疫苗（Plague vaccines）",
},
        {
        "name": "J07AL 肺炎球菌疫苗（Pneumococcal vaccines）",
},
        {
        "name": "J07AM 破傷風疫苗（Tetanus vaccines）",
},
        {
        "name": "J07AN 頓挫性結核疫苗（Tuberculosis vaccines）"
},
        {
        "name": "J07AP 傷寒疫苗（Typhoid vaccines）",
},
        {
        "name": "J07AR 斑疹傷寒疫苗（Typhus (exanthematicus) vaccines）",
},
        {
        "name": "J07AX 其它細菌疫苗（Other bacterial vaccines）",
},
        {
        "name": "J07BA 腦炎疫苗（Encephalitis vaccines）"
},
        {
        "name": "J07BB 流感疫苗（Influenza vaccines）",
},
        {
        "name": "J07BC 肝炎疫苗類（Hepatitis vaccines）"
},
        {
        "name": "J07BD 麻疹疫苗（Measles vaccines）",
},
        {
        "name": "J07BE 腮腺炎疫苗（Mumps vaccines）"
},
        {
        "name": "J07BF 脊髓灰質炎疫苗（Poliomyelitis vaccines）",
},
        {
        "name": "J07BG 狂犬病疫苗（Rabies vaccines）"
},
        {
        "name": "J07BH Rota病毒性腹瀉病疫苗（Rotavirus diarrhea vaccines）",
},
        {
        "name": "J07BJ 風疹疫苗（Rubella vaccines）"
},
        {
        "name": "J07BK 水痘帶狀皰疹疫苗（Varicella zoster vaccines）",
},
        {
        "name": "J07BL 黃熱病疫苗（Yellow fever vaccines）"
},
        {
        "name": "J07BM 乳頭瘤病毒疫苗（Papillomavirus vaccines）",
},
        {
        "name": "J07BX 其它病毒疫苗（Other viral vaccines）"
},
        {
        "name": "J07CA 細菌疫苗和病毒疫苗的複方（Bacterial and viral vaccines, combined）",
},
        {
        "name": "J07X 其它疫苗（Other vaccines）",
},
]

var ATC_p01 = [
        {
        "name": "P01AA Hydroxyquinoline derivatives",
},
        {
        "name": "P01AB Nitroimidazole derivatives",
},
        {
        "name": "P01AC Dichloroacetamide derivatives"
},
        {
        "name": "P01AR Arsenic compounds",
},
        {
        "name": "P01AX Other agents against amoebiasis and other protozoal diseases",
},
        {
        "name": "P01BA Aminoquinolines",
},
        {
        "name": "P01BB Biguanides"
},
        {
        "name": "P01BC Methanolquinolines",
},
        {
        "name": "P01BD Diaminopyrimidines",
},
        {
        "name": "P01BE Artemisinin and derivatives, plain",
},
        {
        "name": "P01BF Artemisinin and derivatives, combinations"
},
        {
        "name": "P01BX Other antimalarials",
},
        {
        "name": "P01CA Nitroimidazole derivatives",
},
        {
        "name": "P01CB Antimony compounds",
},
        {
        "name": "P01CC Nitrofuran derivatives"
},
        {
        "name": "P01CD Arsenic compounds",
},
        {
        "name": "P01CX Other agents against leishmaniasis and trypanosomiasis"
},
]

var ATC_p02 = [
        {
        "name": "P02BA Quinoline derivatives and related substances",
},
        {
        "name": "P02BB Organophosphorous compounds",
},
        {
        "name": "P02BX Other antitrematodal agents"
},
        {
        "name": "P02CA Benzimidazole derivatives",
},
        {
        "name": "P02CB Piperazine and derivatives",
},
        {
        "name": "P02CC Tetrahydropyrimidine derivatives",
},
        {
        "name": "P02CE Imidazothiazole derivatives"
},
        {
        "name": "P02CF Avermectines",
},
        {
        "name": "P02CX Other antinematodals",
},
        {
        "name": "P02DA Salicylic acid derivatives",
},
        {
        "name": "P02DX Other anticestodals"
},
]

var ATC_p03 = [
        {
        "name": "P03AA Sulfur containing products",
},
        {
        "name": "P03AB Chlorine containing products",
},
        {
        "name": "P03AC Pyrethrines, including synthetic compounds"
},
        {
        "name": "P03AX Other ectoparasiticides, including scabicidess",
},
        {
        "name": "P03BA Pyrethrines",
},
        {
        "name": "P03BX Other insecticides and repellents",
},
]

var ATC_l01 = [
        {
        "name": "L01AA 氮芥類似物（Nitrogen mustard analogues）",
},
        {
        "name": "L01AB 烷基磺酸鹽（Alkyl sulfonates）",
},
        {
        "name": "L01AC 氮丙環類（Ethylene imines）"
},
        {
        "name": "L01AD 亞硝基脲（Nitrosoureas）",
},
        {
        "name": "L01AG 環氧化合物（Epoxides）",
},
        {
        "name": "L01AX 其它烷化劑（Other alkylating agents）",
},
        {
        "name": "L01BA 葉酸類似物（Folic acid analogues）",
},
        {
        "name": "L01BB 嘌呤類似物（Purine analogues）",
},
        {
        "name": "L01BC 嘧啶類似物（Pyrimidine analogues）"
},
        {
        "name": "L01CA 長春花鹼和類似物（Vinca alkaloids and analogues））",
},
        {
        "name": "L01CB 鬼臼毒素衍生物（Podophyllotoxin derivatives）",
},
        {
        "name": "L01CC 秋水仙素衍生物（Colchicine derivatives）",
},
        {
        "name": "L01CD 紫杉烷類（Taxanes）",
},
        {
        "name": "L01CX 其它植物鹼和天然產物（Other plant alkaloids and natural products）",
},
        {
        "name": "L01DA 放線菌素（Actinomycine）",
},
        {
        "name": "L01DB 蒽環類藥物（Anthracycline and related substances）",
},
        {
        "name": "L01DC 其它細胞毒抗生素（Other cytotoxic antibiotics）",
},
        {
        "name": "L01XA 鉑化合物（Platinum compounds）",
},
        {
        "name": "L01XB 甲基肼（Methylhydrazines）",
},
        {
        "name": "L01XC 單株抗體（Monoclonal antibodies）",
},
        {
        "name": "L01XD 用於光動力療法或放射線療法的致敏劑（Sensitizers used in photodynamic/radiation therapy）",
},
        {
        "name": "L01XE 蛋白激酶抑制劑（Protein kinase inhibitors）",
},
        {
        "name": "L01XX 其它抗腫瘤藥（Other antineoplastic agents）",
},
        {
        "name": "L01XY 聯合化學療法（Combinations of antineoplastic agents）",
},
]

var ATC_l02 = [
        {
        "name": "L02AA 雌激素類（Estrogens）",
},
        {
        "name": "L02AB 孕激素類（Progestogens）",
},
        {
        "name": "L02AE 促性腺素釋放激素同系物（Gonadotropin-releasing hormone analogues）"
},
        {
        "name": "L02AX 其它激素（Other hormones）",
},
        {
        "name": "L02BA 抗雌激素類（Anti-estrogens）",
},
        {
        "name": "L02BB 抗雄激素類（Anti-androgens）",
},
        {
        "name": "L02BG 酶抑制藥類（Aromatase inhibitors）",
},
        {
        "name": "L02BX 其它激素拮抗藥及其相關藥物（Other hormone antagonists and related agents）",
},
]

var ATC_l03 = [
        {
        "name": "L03AA 集落刺激因子類（Colony stimulating factors）",
},
        {
        "name": "L03AB 干擾素類（Interferons）",
},
        {
        "name": "L03AC 白介素類（Interleukins）"
},
        {
        "name": "L03AX 其它免疫增強劑（Other immunostimulants）",
},
]

var ATC_l04 = [
        {
        "name": "L04AA 選擇性免疫抑制劑（Selective immunosuppressants）",
},
        {
        "name": "L04AB 腫瘤壞死因子α(TNF- α) 抑制劑（Tumor necrosis factor alpha(TNF - α) inhibitors）",
},
        {
        "name": "L04AC 白血球介素抑制劑（Interleukin inhibitors）"
},
        {
        "name": "L04AD 鈣調磷酸酶抑制劑（Calcineurin inhibitors）",
},
        {
        "name": "L04AX 其它免疫抑制劑（Other immunosuppressants）",
},
]

var ATC_m01 = [
        {
        "name": "M01AA Butylpyrazolidines）",
},
        {
        "name": "M01AB Acetic acid derivatives and related substances",
},
        {
        "name": "M01AC Oxicams"
},
        {
        "name": "M01AE Propionic acid derivatives",
},
        {
        "name": "M01AG Fenamates",
},
        {
        "name": "M01AH Coxibs",
},
        {
        "name": "M01AX Other antiinflammatory and antirheumatic agents, non-steroids",
},
        {
        "name": "M01BA Antiinflammatory/antirheumatic agents in combination with corticosteroids"
},
        {
        "name": "M01BX Other antiinflammatory/antirheumatic agents in combination with other drugs",
},
        {
        "name": "M01CA Quinolines",
},
        {
        "name": "M01CB Gold preparations"
},
        {
        "name": "M01CC Penicillamine and similar agents",
},
        {
        "name": "M01CX Other specific antirheumatic agents",
},
]

var ATC_m02 = [
        {
        "name": "M02AA Antiinflammatory preparations, non-steroids for topical use",
},
        {
        "name": "M02AB Capsaicin and similar agents",
},
        {
        "name": "M02AC Preparations with salicylic acid derivatives"
},
        {
        "name": "M02AX Other topical products for joint and muscular pain",
},
]

var ATC_m03 = [
        {
        "name": "M03AA Curare alkaloids",
},
        {
        "name": "M03AB Choline derivatives",
},
        {
        "name": "M03AC Other quaternary ammonium compounds",
},
        {
        "name": "M03AX Other muscle relaxants, peripherally acting agents",
},
        {
        "name": "M03BA Carbamic acid esters",
},
        {
        "name": "M03BB Oxazol, thiazine, and triazine derivatives",
},
        {
        "name": "M03BC Ethers, chemically close to antihistamines",
},
        {
        "name": "M03BX Other centrally acting agents",
},
        {
        "name": "M03CA Dantrolene and derivatives",
},
]

var ATC_m04 = [
        {
        "name": "M04AA Preparations inhibiting uric acid production",
},
        {
        "name": "M04AB Preparations increasing uric acid excretion",
},
        {
        "name": "M04AC Preparations with no effect on uric acid metabolism"
},
        {
        "name": "M04AX Other antigout preparations",
},
]

var ATC_m05 = [
        {
        "name": "M05BA Bisphosphonates",
},
        {
        "name": "M05BB Bisphosphonates, combinations",
},
        {
        "name": "M05BC Bone morphogenetic proteins"
},
        {
        "name": "M05BX Other drugs affecting bone structure and mineralization",
},
]

var ATC_m09 = [
        {
        "name": "M09AA Quinine and derivatives",
},
        {
        "name": "M09AB Enzymes",
},
        {
        "name": "M09AX Other drugs for disorders of the musculo-skeletal system"
},
]

var ATC_n01 = [
        {
        "name": "N01AA 醚類（Ethers）",
},
        {
        "name": "N01AB 鹵代烴（Halogenated hydrocarbons）",
},
        {
        "name": "N01AF 巴比妥類（Barbiturates, plain）"
},
        {
        "name": "N01AG 巴比妥類與其它藥物的複方（Barbiturates in combination with other drugs）",
},
        {
        "name": "N01AH 阿片鹼類麻醉藥（Opioid anesthetics）",
},
        {
        "name": "N01AX 其它全身麻醉藥（Other general anesthetics）"
},
        {
        "name": "N01BA 氨苯甲酸酯類（Esters of aminobenzoic acid）"
},
        {
        "name": "N01BB 醯胺類（Amides）",
},
        {
        "name": "N01BC 苯甲酸酯類（Esters of benzoic acid）",
},
        {
        "name": "N01BX 其它局部麻醉藥（Other local anesthetics）"
},
]

var ATC_n02 = [
        {
        "name": "N02AA 天然阿片生物鹼類（Natural opium alkaloids）",
},
        {
        "name": "N02AB 苯哌啶衍生物（Phenylpiperidine derivatives）",
},
        {
        "name": "N02AC 二苯丙胺衍生物（Diphenylpropylamine derivatives）"
},
        {
        "name": "N02AD 苯並啡烷衍生物（Benzomorphan derivatives）",
},
        {
        "name": "N02AE 東罌粟鹼衍生物（Oripavine derivatives）",
},
        {
        "name": "N02AF 嗎啡烷衍生物（Morphinan derivatives）"
},
        {
        "name": "N02AG 阿片生物鹼類與解痙藥的複方（Opioids in combination with antispasmodics）"
},
        {
        "name": "N02AX 其它生物鹼類（Other opioids）",
},
        {
        "name": "N02BA 水楊酸及其衍生物（Salicylic acid and derivatives）",
},
        {
        "name": "N02BB 吡唑酮類（Pyrazolones）"
},
        {
        "name": "N02BE 醯苯胺類（Anilides）",
},
        {
        "name": "N02BG 其它解熱鎮痛藥（Other analgesics and antipyretics）"
},
        {
        "name": "N02CA 麥角生物鹼類（Ergot alkaloids）",
},
        {
        "name": "N02CB 皮質甾體激素衍生物類（Corticosteroid derivatives）"
},
        {
        "name": "N02CC 選擇性5-羥色胺（5HT1）促效藥（Selective serotonin (5-HT1) agonists）",
},
        {
        "name": "N02CX 其它抗偏頭痛藥（Other antimigraine preparations）"
},
]

var ATC_n03 = [
        {
        "name": "N03AA 巴比妥及其衍生物（Barbiturates and derivatives）",
},
        {
        "name": "N03AB 海因衍生物類（Hydantoin derivatives）",
},
        {
        "name": "N03AC 噁唑烷衍生物類（Oxazolidine derivatives）"
},
        {
        "name": "N03AE 苯並二氮雜卓衍生物類（Benzodiazepine derivatives）",
},
        {
        "name": "N03AF 氨甲醯胺衍生物類（Carboxamide derivatives）",
},
        {
        "name": "N03AG 脂肪酸衍生物類（Fatty acid derivatives）"
},
        {
        "name": "N03AX 其它抗癲癇藥（Other antiepileptics）"
},
]

var ATC_n04 = [
        {
        "name": "N04AA 叔胺類（Tertiary amines）",
},
        {
        "name": "N04AB 化學與抗組胺藥近似的醚類（Ethers chemically close to antihistamines）",
},
        {
        "name": "N04AC 托品醚類或衍生物類（Ethers of tropine or tropine derivatives）"
},
        {
        "name": "N04BA 多巴及其衍生物類（Dopa and dopa derivatives）",
},
        {
        "name": "N04BB 金剛烷胺衍生物（Adamantane derivatives）",
},
        {
        "name": "N04BC 多巴胺促效藥類（Dopamine agonists）"
},
        {
        "name": "N04BD 單胺氧化酶B抑制藥（Monoamine oxidase B inhibitors）"
},
        {
        "name": "N04BX 其它多巴胺能藥（Other dopaminergic agents）"
},
]

var ATC_n05 = [
        {
        "name": "N05AA 帶有脂肪族側鏈的吩噻嗪類（Phenothiazines with aliphatic side-chain）",
},
        {
        "name": "N05AB 帶有哌嗪結構的吩噻嗪類（Phenothiazines with piperazine structure）",
},
        {
        "name": "N05AC 帶有哌啶結構的吩噻嗪類（Phenothiazines with piperidine structure）"
},
        {
        "name": "N05AD 丁醯苯衍生物類（Butyrophenone derivatives）",
},
        {
        "name": "N05AE 吲哚衍生物類（Indole derivatives）",
},
        {
        "name": "N05AF 噻噸衍生物類（Thioxanthene derivative）"
},
        {
        "name": "N05AG 二苯基丁基哌啶衍生物類（Diphenylbutylpiperidine derivatives）"
},
        {
        "name": "N05AH 二氮雜卓、氧氮雜卓、硫氮雜卓和噁庚英類（Diazepines, oxazepines, thiazepines and oxepines）",
},
        {
        "name": "N05AL 苯甲醯胺類（Benzamides）",
},
        {
        "name": "N05AN 鋰（Lithium）"
},
        {
        "name": "N05AX 其它抗精神病藥（Other antipsychotics）",
},
        {
        "name": "N05BA 苯並二氮卓衍生物類（Benzodiazepine derivatives）"
},
        {
        "name": "N05BB 二苯甲烷衍生物類（Diphenylmethane derivatives）",
},
        {
        "name": "N05BC 氨基甲酸酯類（Carbamates）"
},
        {
        "name": "N05BD 二苯並-二環-辛二烯衍生物類（Dibenzo-bicyclo-octadiene derivatives）",
},
        {
        "name": "N05BE 氮雜螺癸二酮衍生物類（Azaspirodecanedione derivatives）"
},
        {
        "name": "N05BX 其它抗焦慮藥（Other anxiolytics））"
},
        {
        "name": "N05CA 巴比妥類，單方（Barbiturates, plain）",
},
        {
        "name": "N05CB 巴比妥類，複方（Barbiturates, combinations）"
},
        {
        "name": "N05CC 醛類及其衍生物（Aldehydes and derivatives）",
},
        {
        "name": "N05CD 苯並二氮卓衍生物類（Benzodiazepine derivatives）"
},
        {
        "name": "N05CE 哌啶二酮衍生物類（Piperidinedione derivatives）",
},
        {
        "name": "N05CF 苯並二氮卓相關藥物（Benzodiazepine related drugs）"
},
        {
        "name": "N05CH 美洛托寧受體激動劑（Melatonin receptor agonists））",
},
        {
        "name": "N05CM 其它催眠鎮靜藥（Other hypnotics and sedatives）"
},
        {
        "name": "N05CX 催眠鎮靜藥與非巴比妥類藥物的複方（Hypnotics and sedatives in combination, excluding barbiturates）"
},
]

var ATC_n06 = [
        {
        "name": "N06AA 非選擇性單胺再吸收抑制藥（Non-selective monoamine reuptake inhibitors）",
},
        {
        "name": "N06AB 選擇性5-羥色胺再吸收抑制藥（Selective serotonin reuptake inhibitors）",
},
        {
        "name": "N06AF 非選擇性單胺氧化酶抑制藥（Monoamine oxidase inhibitors, non-selective）"
},
        {
        "name": "N06AG 單胺氧化酶A抑制藥（Monoamine oxidase A inhibitors）",
},
        {
        "name": "N06AX 其它抗抑鬱藥（Other antidepressants）",
},
        {
        "name": "N06BA 中心作用的擬交感神經藥（Centrally acting sympathomimetics）"
},
        {
        "name": "N06BC 黃嘌呤衍生物（Xanthine derivatives）"
},
        {
        "name": "N06BX 其它精神興奮藥和益智藥（Other psychostimulants and nootropics）",
},
        {
        "name": "N06CA 抗抑鬱藥與安定藥的複方（Antidepressants in combination with psycholeptics）",
},
        {
        "name": "N06CB 精神興奮藥與安定藥的複方Psychostimulants in combination with psycholeptics"
},
        {
        "name": "N06DA 抗膽鹼酯酶類（Anticholinesterases）",
},
        {
        "name": "N06DX 其它抗痴呆藥（Other anti-dementia drugs）"
},
]

var ATC_n07 = [
        {
        "name": "N07AA 抗膽鹼酯酶類（Anticholinesterases）",
},
        {
        "name": "N07AB 膽鹼酯類（Choline esters）",
},
        {
        "name": "N07AX 其它擬副交感神經藥物（Other parasympathomimetics）"
},
        {
        "name": "N07BA 用於尼古丁依賴的藥物（Drugs used in nicotine dependence）",
},
        {
        "name": "N07BB 用於酒精依賴的藥物（Drugs used in alcohol dependence）",
},
        {
        "name": "N07BC 用於阿片依賴的藥物（Drugs used in opioid dependence）"
},
        {
        "name": "N07CA 抗眩暈藥（Antivertigo preparations）"
},
        {
        "name": "N07XA 神經節苷脂類及神經節苷脂衍生物（Gangliosides and ganglioside derivatives）",
},
        {
        "name": "N07XX 其它神經系統用藥（Other nervous system drugs）",
},
]

var ATC_r01 = [
        {
        "name": "R01AA Sympathomimetics, plain",
},
        {
        "name": "R01AB Sympathomimetics, combinations excl. corticosteroids",
},
        {
        "name": "R01AC Antiallergic agents, excl. corticosteroids"
},
        {
        "name": "R01AD Corticosteroids",
},
        {
        "name": "R01AX Other nasal preparations）",
},
        {
        "name": "R01BA Sympathomimetics"
},
]

var ATC_r02 = [
        {
        "name": "R02AA Antiseptics",
},
        {
        "name": "R02AB Antibiotics",
},
        {
        "name": "R02AD Anesthetics, local"
},
        {
        "name": "R02AX Other throat preparations",
},
]

var ATC_r03 = [
        {
        "name": "R03AA Alpha- and beta-adrenoreceptor agonists",
},
        {
        "name": "R03AB Non-selective beta-adrenoreceptor agonists",
},
        {
        "name": "R03AC Selective beta-2-adrenoreceptor agonists"
},
        {
        "name": "R03AH Combinations of adrenergics",
},
        {
        "name": "R03AK Adrenergics in combination with corticosteroids or other drugs, excl. anticholinergics"
},
        {
        "name": "R03AL Adrenergics in combination with anticholinergics",
},
        {
        "name": "R03BA Glucocorticoids",
},
        {
        "name": "R03BB Anticholinergics",
},
        {
        "name": "R03BC Antiallergic agents, excl. corticosteroids"
},
        {
        "name": "R03BX Other drugs for obstructive airway diseases, inhalants",
},
        {
        "name": "R03CA Alpha- and beta-adrenoreceptor agonists"
},
        {
        "name": "R03CB Non-selective beta-adrenoreceptor agonists",
},
        {
        "name": "R03CC Selective beta-2-adrenoreceptor agonists"
},
        {
        "name": "R03CK Adrenergics and other drugs for obstructive airway diseases",
},
        {
        "name": "R03DA Xanthines"
},
        {
        "name": "R03DB Xanthines and adrenergics",
},
        {
        "name": "R03DC Leukotriene receptor antagonists",
},
        {
        "name": "R03DX Other systemic drugs for obstructive airway diseases"
},
]

var ATC_r05 = [
        {
        "name": "R05CA Expectorants",
},
        {
        "name": "R05CB Mucolytics",
},
        {
        "name": "R05DA Opium alkaloids and derivatives"
},
        {
        "name": "R05DB Other cough suppressants"
},
        {
        "name": "R05FA Opium derivatives and expectorants"
},
        {
        "name": "R05FB Other cough suppressants and expectorants"
},
        {
        "name": "R05X OTHER COLD PREPARATIONS"
},
]

var ATC_r06 = [
        {
        "name": "R06AA Aminoalkyl ethers",
},
        {
        "name": "R06AB Substituted alkylamines",
},
        {
        "name": "R06AC Substituted ethylene diamines"
},
        {
        "name": "R06AD Phenothiazine derivatives"
},
        {
        "name": "R06AE Piperazine derivatives",
},
        {
        "name": "R06AK Combinations of antihistamines"
},
        {
        "name": "R06AX Other antihistamines for systemic use"
},
]

var ATC_r07 = [
        {
        "name": "R07AA Lung surfactants",
},
        {
        "name": "R07AB Respiratory stimulants",
},
        {
        "name": "R07AX Other respiratory system products",
},
]


var ATC_s01 = [
        {
        "name": "S01AA 抗生素（Antibiotics）",
},
        {
        "name": "S01AB 磺胺類藥物（Sulfonamides）",
},
        {
        "name": "S01AD 抗病毒藥（Antivirals）",
},
        {
        "name": "S01AX （Other anti-infectives）",
},
        {
        "name": "S01BA 皮質類固醇（Corticosteroids, plain）",
},
        {
        "name": "S01BB 氫化可的松和散瞳劑合劑（Corticosteroids and mydriatics in combination）",
},
        {
        "name": "S01BC 抗炎藥，非甾體抗炎藥（Anti-inflammatory agents, non-steroids）",
},
        {
        "name": "S01CA 皮質類固醇和抗感染藥合劑（Corticosteroids and anti-infectives in combination）",
},
        {
        "name": "S01CB 皮質類固醇、抗感染藥和散瞳劑合劑（Corticosteroids/anti-infectives/mydriatics in combination）",
},
        {
        "name": "S01CC 抗炎藥、非甾體抗炎藥和抗感染藥合劑（Anti-inflammatory agents, non-steroids and anti-infectives in combination）",
},
        {
        "name": "S01EA 治療青光眼的擬交感神經藥（Sympathomimetics in glaucoma therapy）",
},
        {
        "name": "S01EB 擬副交感神經藥（Parasympathomimetics）",
},
        {
        "name": "S01EC 碳酸酐酶抑制劑（Carbonic anhydrase inhibitors）",
},
        {
        "name": "S01ED β-阻滯劑（Beta blocking agents）",
},
        {
        "name": "S01EE 前列腺素類似物（Prostaglandin analogues）",
},
        {
        "name": "S01EX 其它抗青光眼製劑（Other antiglaucoma preparations）",
},
        {
        "name": "S01FA 抗膽鹼能藥（Anticholinergics）",
},
        {
        "name": "S01FB 抗青光眼藥物以外的擬交感神經藥（Sympathomimetics excluding antiglaucoma preparations）",
},
        {
        "name": "S01GA 作為解充血藥的擬交感神經藥（Sympathomimetics used as decongestants）",
},
        {
        "name": "S01GX 其它抗過敏藥（Other antiallergics）",
},
        {
        "name": "S01HA 局部麻醉藥（Local anesthetics）",
},
        {
        "name": "S01JA 著色劑（Colouring agents）",
},
        {
        "name": "S01JX 其它眼科診斷試劑（Other ophthalmological diagnostic agents）",
},
        {
        "name": "S01KA 粘彈性物質（Viscoelastic substances）",
},
        {
        "name": "S01KX 其它外科輔助（Other surgical aids））",
},
        {
        "name": "S01LA 抗血-視網膜屏障破壞試劑（Antineovascularisation agents）",
},
        {
        "name": "S01XA 其他眼科用藥（Other ophthalmologicals）",
},
]

var ATC_s02 = [
        {
        "name": "S02AA 抗感染藥（Anti-infectives）",
},
        {
        "name": "S02BA 皮質類固醇類（Corticosteroids）",
},
        {
        "name": "S02CA 複方中的皮質甾體激素類和抗感染藥類（Corticosteroids and anti-infectives in combination）",
},
        {
        "name": "S02DA 鎮痛藥和麻醉藥（Analgesics and anesthetics）",
},
        {
        "name": "S02DC 無作用藥物（Indifferent preparations）",
},
]
var ATC_s03 = [
        {
        "name": "S03AA Antiinfectives",
},
        {
        "name": "S03BA Corticosteroids",
},
        {
        "name": "S03CA Corticosteroids and antiinfectives in combination）",
},
        {
        "name": "S03D OTHER OPHTHALMOLOGICAL AND OTOLOGICAL PREPARATIONS",
},
]
var ATC_v01 = [
        {
        "name": "V01AA 過敏原提取物（Allergen extracts）",
},
]

var ATC_v03 = [
        {
        "name": "V03AB 解毒劑（Antidotes）",
},
        {
        "name": "V03AC 鐵螯合劑類（Iron chelating agents",
},
        {
        "name": "V03AE 高鉀血症和高磷酸鹽血症治療藥（Drugs for treatment of hyperkalemia and hyperphosphatemia）",
},
        {
        "name": "V03AF 用於抗腫瘤治療的解毒劑（Detoxifying agents for antineoplastic treatment）",
},
        {
        "name": "V03AG 治療高鈣血症的藥物（Drugs for treatment of hypercalcemia）",
},
        {
        "name": "V03AH 低血糖症治療藥物（Drugs for treatment of hypoglycaemia）",
},
        {
        "name": "V03AK 組織粘合劑（Tissue adhesives）",
},
        {
        "name": "V03AM 栓塞藥（Drugs for embolisation）",
},
        {
        "name": "V03AN 醫用氣體（Medical gases）",
},
        {
        "name": "V03AX 其它治療用藥物（Other therapeutic products）",
},
        {
        "name": "V03AZ 神經抑制藥（Nerve depressants）",
},
]

var ATC_v04 = [
        {
        "name": "V04B 尿檢測（Urine tests）",
},
        {
        "name": "V04CA 糖尿病檢測（Tests for diabetes）",
},
        {
        "name": "V04CB 脂肪吸收的檢測（Tests for fat absorption）",
},
        {
        "name": "V04CC 膽管檢測（Tests for bile duct patency）",
},
        {
        "name": "V04CD 垂體功能檢測（Tests for pituitary function）",
},
        {
        "name": "V04CE 肝功能檢測（Tests for liver functional capacity）",
},
        {
        "name": "V04CF 結核診斷藥（Tuberculosis diagnostics）",
},
        {
        "name": "V04CG 胃液分泌檢測（Tests for gastric secretion）",
},
        {
        "name": "V04CH 腎功能檢測（Tests for renal function）",
},
        {
        "name": "V04CJ 甲狀腺功能檢測（Tests for thyreoidea function）",
},
        {
        "name": "V04CK 胰腺功能檢測（Tests for pancreatic function）",
},
        {
        "name": "V04CL 變應性疾病檢測（Tests for allergic diseases）",
},
        {
        "name": "V04CM 生育障礙檢測（Tests for fertility disturbances）",
},
        {
        "name": "V04CX 其它診斷試劑（Other diagnostic agents）",
},
]

var ATC_v06 = [
        {
        "name": "V06AA 低能量食譜（Low-energy diets）",
},
        {
        "name": "V06B 蛋白質補充（Protein supplements）",
},
        {
        "name": "V06CA 無苯丙氨酸的營養（Nutrients without phenylalanine）",
},
        {
        "name": "V06DA 碳水化合物/蛋白質/礦物質/維生素，複方（Carbohydrates/proteins/minerals/vitamins, combinations）",
},
        {
        "name": "V06DB 脂肪/碳水化合物/蛋白質/礦物質/維生素，複方（Fat/carbohydrates/proteins/minerals/vitamins, combinations）",
},
        {
        "name": "V06DC 碳水化合物（Carbohydrates）",
},
        {
        "name": "V06DD 胺基酸，含與多肽的複方（Amino acids, including combinations with polypeptides）",
},
        {
        "name": "V06DE 胺基酸/碳水化合物/礦物質/維生素，複方（Amino acids/carbohydrates/minerals/vitamins, combinations）",
},
        {
        "name": "V06DF 代乳品（Milk substitutes）",
},
        {
        "name": "V06DX 其它複方的營養（Other combinations of nutrients）",
},
]

var ATC_v07 = [
        {
        "name": "V07AA 石膏類（Plasters）",
},
        {
        "name": "V07AB 溶劑和稀釋劑，含灌注溶液（Solvents and diluting agents, including irrigating solutions）",
},
        {
        "name": "V07AC 輸血，輔助用品（Blood transfusion, auxiliary products）",
},
        {
        "name": "V07AD 驗血，輔助用品（Blood tests, auxiliary products）",
},
        {
        "name": "V07AN 無節制設備（Incontinence equipment）",
},
        {
        "name": "V07AR 敏感性檢測，盤和片（Sensitivity tests, discs and tablets）",
},
        {
        "name": "V07AS 口點儀器（Stoma equipment）",
},
        {
        "name": "V07AT 化妝品（Cosmetics）",
},
        {
        "name": "V07AV 工業消毒劑（Technical disinfectants）",
},
        {
        "name": "V07AX 洗滌劑等（Washing agents etc.）",
},
        {
        "name": "V07AY 其它非治療用輔助物品（Other non-therapeutic auxiliary products）",
},
        {
        "name": "V07AZ 分析用化學品和試劑（Chemicals and reagents for analysis）",
},
]

var ATC_v08 = [
        {
        "name": "V08AA 水溶性、向腎性、高滲透壓的X射線造影劑（Water-soluble, nephrotropic, high osmolar X-ray contrast media）",
},
        {
        "name": "V08AB 水溶性、向腎性、低滲透壓的X射線造影劑（Water-soluble, nephrotropic, low osmolar X-ray contrast media）",
},
        {
        "name": "V08AC 水溶性、親肝的X射線造影劑（Water-soluble, hepatotropic X-ray contrast media）",
},
        {
        "name": "V08AD 非水溶性的X射線造影劑（Non-watersoluble X-ray contrast media）",
},
        {
        "name": "V08BA 含硫酸鋇的X射線造影劑（Barium sulfate containing X-ray contrast media）",
},
        {
        "name": "V08CA 順磁性造影劑（Paramagnetic contrast media）",
},
        {
        "name": "V08CB 超順磁性造影劑（Superparamagnetic contrast media）",
},
        {
        "name": "V08CX 其它磁共振成像造影劑（Other magnetic resonance imaging contrast media）",
},
        {
        "name": "V08DA 超聲造影劑（Ultrasound contrast media）",
},
]

var ATC_v09 = [
        {
        "name": "V09AA 鎝(99mTc)化合物類（Technetium (99mTc)） compounds",
},
        {
        "name": "V09AB 碘(123I)化合物類（Iodine (123) compounds）",
},
        {
        "name": "V09AX 其它中樞神經系統診斷用放射性藥物（Other central nervous system diagnostic radiopharmaceuticals）",
},
        {
        "name": "V09BA 鎝(99mTc)化合物類（Technetium (99mTc) compounds）",
},
        {
        "name": "V09CX 其它腎臟系統診診斷用放射性藥物（Other renal system diagnostic radiopharmaceuticals）",
},
        {
        "name": "V09DA 鎝(99mTc)化合物類（Technetium (99mTc) compounds）",
},
        {
        "name": "V09DB 鎝(99mTc)，微粒和膠體（Technetium (99mTc), particles and colloids）",
},
        {
        "name": "V09DX 其它肝臟和網狀內皮系統診斷用放射性藥物（Other hepatic and reticulo endothelial system diagnostic radiopharmaceuticals）",
},
        {
        "name": "V09EA 鎝(99mTc)，吸入劑（Technetium (99mTc) inhalants）",
},
        {
        "name": "V09EB 鎝(99mTc)，注射用顆粒（Technetium (99mTc) particles for injection）",
},
        {
        "name": "V09EX 其它呼吸系統診斷用放射性藥物（Other respiratory system diagnostic radiopharmaceuticals）",
},
        {
        "name": "V09FX 各種甲狀腺診斷用放射性藥物（Various thyroid diagnostic radiopharmaceuticals）",
},
        {
        "name": "V09GA 鎝(99mTc)化合物類（Technetium (99mTc) compounds）",
},
        {
        "name": "V09GB 碘(125I)化合物類（Iodine (125I) compounds）",
},
        {
        "name": "V09GX 其它心血管系統的診斷用放射性藥物（Other cardiovascular system diagnostic radiopharmaceuticals）",
},
        {
        "name": "V09HA 鎝(99mTc)化合物類（Technetium (99mTc) compounds）",
},
        {
        "name": "V09HB 銦(111In)化合物類（Indium (111In) compounds）",
},
        {
        "name": "V09HX 其它用於炎症和感染檢測的診斷用放射性藥物（Other diagnostic radiopharmaceuticals for inflammation and infection detection）",
},
        {
        "name": "V09IA 鎝(99mTc)化合物類（Technetium (99mTc) compounds）",
},
        {
        "name": "V09IB 銦(111In)化合物類（Indium (111In) compounds）",
},
        {
        "name": "V09IX 其它用於腫瘤檢測的診斷用放射性藥物（Other diagnostic radiopharmaceuticals for tumour detection）",
},
        {
        "name": "V09XA 碘(131I)化合物類（Iodine (131I) compounds）",
},
        {
        "name": "V09XX 幾種診斷用放射性藥物（Various diagnostic radiopharmaceuticals）",
},
]

var ATC_v10 = [
        {
        "name": "V10AA 釔(90Y)化合物類（Yttrium (90Y) compounds）",
},
        {
        "name": "V10AX 其它抗炎的放射性治療藥物（Other anti-inflammatory therapeutic radiopharmaceuticals）",
},
        {
        "name": "V10BX 緩解疼痛的放射性藥物（Various pain palliation radiopharmaceuticals）",
},
        {
        "name": "V10XA Iodine 碘(131I)化合物類（(131I) compounds）",
},
        {
        "name": "V10XX 各種治療用放射性藥物（Various therapeutic radiopharmaceuticals）",
},
]
var ATC_v20 = [
        {
        "name": "V20  SURGICAL DRESSINGS",
},
]
//CCC
//藥品list
var list = [
        {
        "name": "Toujeo",
},
        {
        "name": "Soliqua"
},
        {
        "name": "Levemir "
},
        {
        "name": "Tresiba"
},
        {
        "name": "Longa cting"
},
        {
        "name": "Novorapid",
},
        {
        "name": "Novomix30"
},
        {
        "name": "Novomix50"
},
        {
        "name": "Premixed"
},
        {
        "name": "Victoza"
},
        {
        "name": "Ozempic 1 自費"
},
        {
        "name": "Trulicity0.75"
},
        {
        "name": "Trulicity1.5"
},
        {
        "name": "NovoRapid + GLP-1RA",
},
        {
        "name": "GLP-1RA"
},
        {
        "name": "Syncon"
},
]
//照list順序抓用藥量
var list_m = [
        {
        "month": "2017-1月",
    "children":
        [
                    {
        "name": mathfloor_r()
},
                    {
        "name": ""
},
                    {
        "name": mathfloor_r()
},
                    {
        "name": "0"
},
                    {
        "name": mathfloor_r()
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": mathfloor_r()
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": mathfloor_r()
},
                    {
        "name": ""
},
                    {
        "name": mathfloor_r()
},
                    {
        "name": "0"
},
                    {
        "name": mathfloor_r()
},
                    {
        "name": mathfloor_r()
},
]
},
        {
        "month": "2017-2月",
    "children":
        [
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "63"
},
]
},
        {
        "month": "2017-3月",
    "children":
        [
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "63"
},
]
},
        {
        "month": "2017-4月",
    "children":
        [
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "63"
},
]
},
        {
        "month": "2017-5月",
    "children":
        [
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "63"
},
]
},
        {
        "month": "2017-6月",
    "children":
        [
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "63"
},
]
},
        {
        "month": "2017-7月",
    "children":
        [
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "63"
},
]
},
        {
        "month": "2017-8月",
    "children":
        [
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "63"
},
]
},
        {
        "month": "2017-9月",
    "children":
        [
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "63"
},
]
},
        {
        "month": "2017-10月",
    "children":
        [
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "63"
},
]
},
        {
        "month": "2017-11月",
    "children":
        [
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "63"
},
]
},
        {
        "month": "2017-12月",
    "children":
        [
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "35"
},
                    {
        "name": ""
},
                    {
        "name": "28"
},
                    {
        "name": "0"
},
                    {
        "name": "63"
},
                    {
        "name": "63"
},
]
},

]

    $(document).ready(function () {
        try {
            //建立類別選項
            var option = document.createElement("option");
    $('.filter_1').append(option);
            $.each(ATC_1, function (index, element) {
                var option = document.createElement("option");
    $(option).text(element.name);
    $('.filter_1').append(option);
});

var option = document.createElement("option");
$('.filter_2').append(option);
            $.each(ATC_a, function (index, element) {
                var option = document.createElement("option");
    $(option).text(element.name);
    $('.filter_2').append(option);
});
//filter_1被選擇後
            $(".filter_1").change(function () {
                ;
    $('.filter_2').empty();
    var option = document.createElement("option");
    $('.filter_2').append(option);

    optionadd(ATC_a, "A:消化系統和代謝系統", "A");

    optionadd(ATC_b, "B:血液及造血器官", "B");

    optionadd(ATC_c, "C:心血管系統", "C");

    optionadd(ATC_d, "D:皮膚科用藥", "D");

    optionadd(ATC_g, "G:泌尿生殖系統及性激素藥品", "G");

    optionadd(ATC_h, "H:激素製劑，不包括性激素及胰島素", "H");

    optionadd(ATC_j, "J:抗感染藥", "J");

    optionadd(ATC_p, "P:抗寄生蟲藥、殺蟲劑及驅蟲劑", "P");

    optionadd(ATC_l, "L:抗腫瘤藥及免疫製劑", "L");

    optionadd(ATC_m, "M:肌肉及骨骼系統", "M");

    optionadd(ATC_n, "N:神經系統", "N");

    optionadd(ATC_r, "R:呼吸系統", "R");

    optionadd(ATC_s, "S:感覺器", "S");

    optionadd(ATC_v, "V:其他", "V");
    // filter_1 以選項判斷 filter_2的類別
                function optionadd(a, b, c) {
                    if ($(".filter_1").find("option:selected").text() == b) {
        $.each(a, function (index, element) {
            var option = document.createElement("option");
            $(option).text(element.name);
            $('.filter_2').append(option);
        });
    $('#input').val(c)
}
}
});
//filter_2被選擇後
            $(".filter_2").change(function () {
                ;
    $('#table_a').empty();
    red(ATC_a01, "A01:口腔病藥物", "A01");
    red(ATC_a02, "A02:治療與胃酸分泌相關疾病的藥物", "A02");
    red(ATC_a03, "A03:腸胃機能失調用藥", "A03");
    red(ATC_a04, "A04:止吐藥及止噁心藥", "A04");
    red(ATC_a05, "A05:肝、膽疾病治療藥", "A05");
    red(ATC_a06, "A06:輕瀉藥", "A06");
    red(ATC_a07, "A07:止瀉藥、腸道消炎藥、腸道抗感染藥", "A07");
    red(ATC_a08, "A08:減肥製劑，不包含飲食製品", "A08");
    red(ATC_a09, "A09:消化藥，包括酶", "A09");
    red(ATC_a10, "A10:糖尿病用藥", "A10");
    red(ATC_a11, "A11 維生素", "A11");
    red(ATC_a12, "A12 礦物補充劑", "A12");
    red(ATC_a13, "A13 補藥", "A13");
    red(ATC_a14, "A14 同化作用藥", "A14");
    red(ATC_a15, "A15 食慾促進劑", "A15");
    red(ATC_a16, "A16 其它消化道及新陳代謝用藥", "A16");

    red(ATC_b01, "B01 抗血栓藥（Antithrombotic agents）", "B01");
    red(ATC_b02, "B02 抗出血藥（Antihemorrhagics）", "B02");
    red(ATC_b03, "B03 抗貧血藥（Antianemic preparations）", "B03");
    red(ATC_b05, "B05 換血及灌注液（Blood substitutes and perfusion solutions）", "B05");
    red(ATC_b06, "B06 其它血液學藥劑（Other hematological agents）", "B06");

    red(ATC_c01, "C01 心臟治療（Cardiac therapy)", "C01");
    red(ATC_c02, "C02 抗高血壓藥(Antihypertensives)", "C02");
    red(ATC_c03, "C03 利尿藥(Diuretics)", "C03");
    red(ATC_c04, "C04 外周血管擴張藥(Peripheral vasodilators)", "C04");
    red(ATC_c05, "C05 血管保護劑(Vasoprotectives)", "C05");
    red(ATC_c07, "C07 β阻滯劑(Beta blocking agents)", "C07");
    red(ATC_c08, "C08 鈣通道阻滯劑(Calcium channel blockers)", "C08");
    red(ATC_c09, "C09 作用在腎素 - 血管緊張素系統上的藥劑(Agents acting on the renin - angiotensin system)", "C09");
    red(ATC_c10, "C10 血脂調節劑(Lipid modifying agents)", "C10");

    red(ATC_d01, "D01 皮膚病用抗真菌藥（Antifungals for dermatological use）", "D01");
    red(ATC_d02, "D02 潤膚劑及保護劑（Emollients and protectives）", "D02");
    red(ATC_d03, "D03 治療創傷及潰瘍製劑（Preparations for treatment of wounds and ulcers）", "D03");
    red(ATC_d04, "D04 止癢藥（包括抗組胺藥、麻醉劑等）（Antipruritics, including antihistamines, anesthetics, etc.）", "D04");
    red(ATC_d05, "D05 抗銀屑病藥（Antipsoriatics）", "D05");
    red(ATC_d06, "D06 皮膚病用抗生素及化學治療藥（Antibiotics and chemotherapeutics for dermatological use）", "D06");
    red(ATC_d07, "D07 皮質類固醇皮膚科製劑（Corticosteroids, dermatological preparations）", "D07");
    red(ATC_d08, "D08 消毒劑及殺菌劑（Antiseptics and disinfectants）", "D08");
    red(ATC_d09, "D09 醫用敷料（Medicated dressings）", "D09");
    red(ATC_d10, "D10 防粉刺製劑（Anti - acne preparations）", "D10");
    red(ATC_d11, "D11 其它皮膚科製劑（Other dermatological preparations）", "D11");

    red(ATC_g01, "G01 婦產科抗感染藥及殺菌劑（Gynecological antiinfectives and antiseptics）", "G01");
    red(ATC_g02, "G02 其它婦產科用藥（Other gynecologicals）", "G02");
    red(ATC_g03, "G03 性激素及生殖系統調質（Sex hormones and modulators of the genital system）", "G03");
    red(ATC_g04, "G04 泌尿外科（Urologicals）", "G04");

    red(ATC_h01, "H01 垂體、下丘腦激素及類似物（Pituitary and hypothalamic hormones and analogues）", "H01");
    red(ATC_h02, "H02 皮質類固醇（Corticosteroids for systemic use）", "H02");
    red(ATC_h03, "H03 甲狀腺治療（Thyroid therapy）", "H03");
    red(ATC_h04, "H04 胰激素（Pancreatic hormones）", "H04");
    red(ATC_h05, "H05 體內鈣平衡（Calcium homeostasis(PITUITARY AND HYPOTHALAMIC HORMONES AND ANALOGUES)", "H05");

    red(ATC_j01, "J01 抗菌藥（Antibacterials for systemic use)", "J01");
    red(ATC_j02, "J02 抗真菌藥（Antimycotics for systemic use）", "J02");
    red(ATC_j04, "J04 抗分支桿菌藥（Antimycobacterials）", "J04");
    red(ATC_j05, "J05 抗病毒藥（Antivirals for systemic use）", "J05");
    red(ATC_j06, "J06 免疫血清及免疫球蛋白（Immune sera and immunoglobulins）", "J06");
    red(ATC_j07, "J07 疫苗（Vaccines）", "J07");

    red(ATC_p01, "P01 抗原蟲藥（Antiprotozoals）", "P01");
    red(ATC_p02, "P02 驅腸蟲藥（Anthelmintics）", "P02");
    red(ATC_p03, "P03 殺體外寄生蟲藥，包括殺疥蟎藥、殺蟲劑、驅蟲劑（Ectoparasiticides, including scabicides, insecticides and repellents）", "P03");

    red(ATC_l01, "L01 抗腫瘤藥（Antineoplastic agents）", "L01");
    red(ATC_l02, "L02 內分泌治療（Endocrine therapy）", "L02");
    red(ATC_l03, "L03 免疫增強劑（Immunostimulants）", "L03");
    red(ATC_l04, "L04 免疫抑制劑（Immunosuppressants）", "L04");

    red(ATC_m01, "M01 抗炎藥及抗風濕藥（Anti - inflammatory and antirheumatic products）", "M01");
    red(ATC_m02, "M02 關節和肌肉疼痛外用產品（Topical products for joint and muscular pain）", "M02");
    red(ATC_m03, "M03 肌肉鬆弛劑（Muscle relaxants）", "M03");
    red(ATC_m04, "M04 抗痛風藥（Antigout preparations）", "M04");
    red(ATC_m05, "M05 骨病治療藥（Drugs for treatment of bone diseases）", "M05");
    red(ATC_m09, "M09 治療肌骨骼系統紊亂（Other drugs for disorders of the musculo - skeletal system）", "M09");

    red(ATC_n01, "N01 麻醉劑（Anesthetics）", "N01");
    red(ATC_n02, "N02 止痛藥（Analgesics）", "N02");
    red(ATC_n03, "N03 抗癲癇藥（Antiepileptics）", "N03");
    red(ATC_n04, "N04 抗帕金森氏藥（Anti - parkinson drugs）", "N04");
    red(ATC_n05, "N05 精神抑制藥（Psycholeptics）", "N05");
    red(ATC_n06, "N06 精神興奮藥（Psychoanaleptics）", "N06");
    red(ATC_n07, "N07 其他神經系統藥品（Other nervous system drugs）", "N07");

    red(ATC_r01, "R01 鼻部用藥（Nasal preparations）", "R01");
    red(ATC_r02, "R02 喉部用藥（Throat preparations）", "R02");
    red(ATC_r03, "R03 阻塞性氣道疾病用藥（Drugs for obstructive airway diseases）", "R03");
    red(ATC_r05, "R05 咳嗽及感冒用藥（Cough and cold preparations）", "R05");
    red(ATC_r06, "R06 抗組胺藥（Antihistamines for systemic use）", "R06");
    red(ATC_r07, "R07 其它呼吸系統藥劑（Other respiratory system products", "R07");

    red(ATC_s01, "S01 眼科（Ophthalmologicals）", "S01");
    red(ATC_s02, "S02 耳科（Otologicals）", "S02");
    red(ATC_s03, "S03 眼科及耳科製劑（Ophthalmological and otological preparations）", "S03");

    red(ATC_v01, "V01 過敏原（Allergens）", "V01");
    red(ATC_v03, "V03 其它各種治療用藥品（All other therapeutic products）", "V03");
    red(ATC_v04, "V04 診斷用藥（Diagnostic agents）", "V04");
    red(ATC_v06, "V06 一般營養品（General nutrients）", "V06");
    red(ATC_v07, "V07 其他全部非治療學製品（All other non-therapeutic products）", "V07");
    red(ATC_v08, "V08 造影劑（Contrast media）", "V08");
    red(ATC_v09, "V09 診斷用放射性藥物（Diagnostic radiopharmaceuticals", "V09");
    red(ATC_v10, "V10 治療性放射性藥物（Therapeutic radiopharmaceuticals）", "V10");
    red(ATC_v20, "V20 外科敷料（Surgical dressings）", "V20");
});
// filter_2 以選項判斷 table_a的類別
            function red(a, b, c) {
                if ($(".filter_2").find("option:selected").text() == b) {
        $.each(a, function (index, element) {
            var tr = document.createElement("tr");
            $(tr).attr("class", "td01");
            table_a.append(tr);
            var td = document.createElement("td");
            $(td).text(element.name);
            tr.append(td);
        });
    //點選td改變css
    $('.td01').click(function () {
        $('.td01').css('background', '#ffffff');
    $('.td01').css('color', '#000000');
    $(this).css('background', '#ff6a00');
    $(this).css('color', '#ffffff');
    var str = $(this).text();
    $('#input').val(str.substr(0, 5))
});
$('#input').val(c)
}
}
}
        catch (e) {
    }
    });

    var arr = {
        time: [],//圖表X軸
    mon:[]
};
//查詢結果傳送，資料顯示
    function ordfa() {
        //查詢結果
        var result = "查詢結果:" + $("#input").val() + " " + $(".bdaymonth_1").val() + "至" + $(".bdaymonth_2").val()
    alert(result);
    var table_0 = $('.table_0');
    $('#a1').css('width', 'auto');
    $('#result').text(result);
    //建立table
    $('.table_0').empty();
    var tr1 = document.createElement("tr");
    $(tr1).attr('class', 'table_1');
    table_0.append(tr1);
    var td = document.createElement("td");
    $(td).text($("#input").val());
    tr1.append(td);
    //list 查詢的藥品名稱
        $.each(list, function (index, element) {
            var td1 = document.createElement("td");
    $(td1).attr('class', 'table_td01');
    $(td1).text(element.name);
    $(".table_1").append(td1);
});
//list 按list 照月份的用藥數量
arr.time = [];//重製X軸
arr.mon = [];//重製藥品種類

        $.each(list_m, function (index, element) {
            var tr = document.createElement("tr");
    table_0.append(tr);
    var td = document.createElement("td");
    $(td).attr('class', 'table_td');
    $(td).text(element.month);
    tr.append(td);

   //按月份設定圖表X軸
    arr.time.push(element.month);

            $.each(element.children, function (index, element) {
                var td2 = document.createElement("td");
    $(td2).css('width', '300px')
    $(td2).attr('class', 'table_td');
    $(td2).text(element.name);
    $(tr).append(td2);
});
});
  
//建立圖表
chart_js()
//點選藥品名，建立圖表的藥品種類
/*
        $('.table_td01').click(function () {
            if ($(this).css('color') == 'rgb(0, 0, 0)') {
        $(this).css('background', '#ff6a00');
    $(this).css('color', '#ffffff');
    arr.mon.push($(this).text());
    alert(arr.mon)
}
            else {
        $(this).css('background', '#ffffff');
    $(this).css('color', '#000000');

    console.log(arr.mon)
    var index = arr.mon.indexOf($(this).text());
                if (index > -1) {
        arr.mon.splice(index, 1);
    }
    console.log(arr.mon);
}
});
*/


        var a = [{"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 0, "columnIndex": 0, "rowSpan": 1, "colSpan": 4, "text": "論質糖尿病VPN表單", "fontFamily": "微軟正黑體", "fontSize": 29, "fontWeight": "bold", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 1, "columnIndex": 0, "rowSpan": 1, "colSpan": 4, "text": "基本資料", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "bold", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#cc99ff", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 2, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "醫事機構代碼", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#ffffff", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 2, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "_HNO_", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#ffffcc", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 2, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "疾病", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#ffffff", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 2, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "糖尿病", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#ffffcc", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 3, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "病患姓名", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 3, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "【 姓名 】", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Name", "background": "#ffffcc", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 3, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "病患身分證碼", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 3, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "【 身份證 】", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Idno", "background": "#ffffcc", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 4, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "出生日期", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 4, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "【 生日(民國) 】", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "BirthTw", "background": "#ffffcc", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 4, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "醫師身分證號", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "e1e0dde6-bad3-4ab1-896d-c96e38547685", "imageKey": "", "laboratoryID": "", "laboratoryName": "", "laboratoryID2": "", "laboratoryName2": "", "rowIndex": 4, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "下拉選單", "fontFamily": "微軟正黑體", "fontSize": "21", "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "\nF124673814    \nN123655274   \nB101506129\nE222839897", "borderParaList": "", "itemType": "ComboBox", "background": "#ffffcc", "tabIndex": "", "color": "#000000", "PK": "", "FK": "", "fieldPK": "", "fieldFK": "", "fieldFKName": "", "fieldFK2": "", "fieldFKName2": "", "VPN": "DM-D-06" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 5, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "第二階段照護", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "881958a5-7926-4e01-ac50-f5e08c25b373", "imageKey": "", "laboratoryID": "", "rowIndex": 5, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "下拉選單", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "N：否\nY：是", "borderParaList": "", "itemType": "ComboBox", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-14" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 5, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "診療階段", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "696fc477-b96e-47e9-bebc-11e94bded56f", "imageKey": "", "laboratoryID": "", "rowIndex": 5, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "下拉選單", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "\n0：初診\n1：複診\n2：年度", "borderParaList": "", "itemType": "ComboBox", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-07" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 6, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "家族病史", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "71730a40-5af1-4385-8f91-77002311a846", "imageKey": "", "laboratoryID": "", "rowIndex": 6, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "下拉選單", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "0：無\n1：有\nX：不詳", "borderParaList": "", "itemType": "ComboBox", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-10" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 6, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#c0c0c0", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 6, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#c0c0c0", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 7, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "糖尿病病型", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "466b2e35-faf4-49c4-8b78-a1b7f1d31f5e", "imageKey": "", "laboratoryID": "", "rowIndex": 7, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "下拉選單", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "2：第二型\n1：第一型\nX：其他", "borderParaList": "", "itemType": "ComboBox", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-15" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 7, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "發病起始年(西元)", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "a4f3627e-a218-4d2f-93ba-ec0b777213d9", "imageKey": "", "laboratoryID": "", "rowIndex": 7, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "文字輸入", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Text", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-16" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 8, "columnIndex": 0, "rowSpan": 1, "colSpan": 4, "text": "基本檢查資料", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "bold", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#cc99ff", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 9, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "基本檢查日期", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "e2396493-f75e-43fe-8745-153f32242e17", "imageKey": "", "laboratoryID": "", "rowIndex": 9, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "【 日期 】", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Date", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-17" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 9, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#c0c0c0", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 9, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#c0c0c0", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 10, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "身高", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "5ee031c3-3258-42df-bd79-a03c21e20844", "imageKey": "", "laboratoryID": "", "rowIndex": 10, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "【 身高 】", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "TALL", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-18" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 10, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "收縮壓", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#ffffff", "color": "#000000" }, {"key": "8c2d4f3c-cfff-41a2-a27c-8f1db82234b1", "imageKey": "", "laboratoryID": "", "rowIndex": 10, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "【 收縮壓 】", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "SBP", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-20" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 11, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "體重", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "7591e735-1138-4e5e-ad7d-2be1b9e45b68", "imageKey": "", "laboratoryID": "", "rowIndex": 11, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "【 體重 】", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "WEIGHT", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-19" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 11, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "舒張壓", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "7cf05c8a-43d7-4827-8633-c0c86fec8ff1", "imageKey": "", "laboratoryID": "", "rowIndex": 11, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "【 舒張壓 】", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "EBP", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-21" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 12, "columnIndex": 0, "rowSpan": 1, "colSpan": 4, "text": "血液檢驗資料", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "bold", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#cc99ff", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 13, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "血液檢驗日期", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "123c504a-d009-4a2d-8911-b7f4649a802d", "imageKey": "", "laboratoryID": "", "rowIndex": 13, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "【 日期 】", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Date", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-22" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 13, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#c0c0c0", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 13, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#c0c0c0", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 14, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "糖化血色素(HbA1c)", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "14d93a31-ac6d-45e7-897c-0ea6291b054a", "imageKey": "", "laboratoryID": "7fbb9c32-335f-480b-ab89-10e95d3f3920", "laboratoryName": "Hb A1c 醣化血色素", "laboratoryID2": "", "laboratoryName2": "", "rowIndex": 14, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "【 檢驗 】", "fontFamily": "微軟正黑體", "fontSize": "21", "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Lab", "background": "#ffffcc", "tabIndex": "", "color": "#000000", "PK": "", "FK": "", "fieldPK": "", "fieldFK": "", "fieldFKName": "", "VPN": "DM-D-23" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 14, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "低密度脂蛋白(LDL)", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "4a62f765-a7d8-4747-b70f-f9418dcfbaed", "imageKey": "", "laboratoryID": "", "rowIndex": 14, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "【 檢驗 】", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Lab", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-24" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 15, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "AC SUGER", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "86b5e696-2314-4b84-8f02-b660388a3b0e", "imageKey": "", "laboratoryID": "781e620a-e343-4953-845f-192a87430727", "laboratoryName": "Glucose AC 飯前血糖", "laboratoryID2": "", "laboratoryName2": "", "rowIndex": 15, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "【 檢驗 】", "fontFamily": "微軟正黑體", "fontSize": "21", "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Lab", "background": "#ffffcc", "tabIndex": "", "color": "#000000", "PK": "", "FK": "", "fieldPK": "", "fieldFK": "", "fieldFKName": "", "VPN": "DM-D-25" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 15, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "PC SUGER", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "9888e419-b301-47c1-8156-80da5aeb50cc", "imageKey": "", "laboratoryID": "89fcb4f1-ddd8-4cc1-a2ab-7d851f9995c6", "laboratoryName": "Glucose PC 飯後血糖", "laboratoryID2": "", "laboratoryName2": "", "rowIndex": 15, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "【 檢驗 】", "fontFamily": "微軟正黑體", "fontSize": "21", "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Lab", "background": "#ffffcc", "tabIndex": "", "color": "#000000", "PK": "", "FK": "", "fieldPK": "", "fieldFK": "", "fieldFKName": "", "VPN": "DM-D-26" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 16, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "三酸甘油脂(TG)", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "e8e0939b-22ab-4c5e-b80a-4deb7150642b", "imageKey": "", "laboratoryID": "3d7f1cbd-ab84-41ef-b4dd-fb045776ca41", "laboratoryName": "Triglyceride三酸甘油脂", "laboratoryID2": "", "laboratoryName2": "", "rowIndex": 16, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "【 檢驗 】", "fontFamily": "微軟正黑體", "fontSize": "21", "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Lab", "background": "#ffffcc", "tabIndex": "", "color": "#000000", "PK": "", "FK": "", "fieldPK": "", "fieldFK": "", "fieldFKName": "", "VPN": "DM-D-27" }, {"key": "", "imageKey": "", "laboratoryID": "", "laboratoryName": "", "laboratoryID2": "", "laboratoryName2": "", "rowIndex": 16, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "肌酸酐(Creatinine)", "fontFamily": "微軟正黑體", "fontSize": "21", "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "tabIndex": "", "color": "#000000", "PK": "", "FK": "", "fieldPK": "", "fieldFK": "", "fieldFKName": "", "VPN": "" }, {"key": "b2b0c1ea-c13b-40e4-8dca-9e0e0b137046", "imageKey": "", "laboratoryID": "c1719579-88a2-4739-aa1c-d560b7f73ad8", "laboratoryName": "Creatinine 肌酸酐", "laboratoryID2": "", "laboratoryName2": "", "rowIndex": 16, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "【 檢驗 】", "fontFamily": "微軟正黑體", "fontSize": "21", "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Lab", "background": "#ffffcc", "tabIndex": "", "color": "#000000", "PK": "", "FK": "", "fieldPK": "", "fieldFK": "", "fieldFKName": "", "VPN": "DM-D-34" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 17, "columnIndex": 0, "rowSpan": 1, "colSpan": 4, "text": "尿液檢驗資料", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "bold", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#cc99ff", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 18, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "尿液檢驗日期", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "e5c4fab5-e343-4919-acd4-28ce5e799a85", "imageKey": "", "laboratoryID": "", "rowIndex": 18, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "【 日期 】", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Date", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-28" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 18, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#c0c0c0", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 18, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#c0c0c0", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 19, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "尿液微量白蛋白(ACR)", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "37e58a1a-3adc-4399-9427-344edbd2018f", "imageKey": "", "laboratoryID": "4deb9857-ad08-49c2-ab67-3af054c0284e", "laboratoryName": "Microalbumin/Creatinine(9938)", "laboratoryID2": "", "laboratoryName2": "", "rowIndex": 19, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "【 檢驗 】", "fontFamily": "微軟正黑體", "fontSize": "21", "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Lab", "background": "#ffffcc", "tabIndex": "", "color": "#000000", "PK": "", "FK": "", "fieldPK": "", "fieldFK": "", "fieldFKName": "", "fieldFKCustomTableId": "", "fieldFK2": "", "fieldFKName2": "", "fieldFKCustomTableId2": "", "TITLE": "", "VPN": "DM-D-29" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 19, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "尿液常規檢查", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "84930877-f700-4f32-a581-358feeefc691", "imageKey": "", "laboratoryID": "", "rowIndex": 19, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "下拉選單", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "\n1：正常\n2：異常", "borderParaList": "", "itemType": "ComboBox", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-30" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 20, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "腎絲球過濾值(eGFR)", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "02ba7f97-848a-4768-911d-49bec8b194e8", "imageKey": "", "laboratoryID": "3229bcfd-6c45-4f42-8021-1eedb8924709", "laboratoryName": "eGFR 估計腎絲球過濾率", "laboratoryID2": "", "laboratoryName2": "", "rowIndex": 20, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "【 檢驗 】", "fontFamily": "微軟正黑體", "fontSize": "21", "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Lab", "background": "#ffffcc", "tabIndex": "", "color": "#000000", "PK": "", "FK": "", "fieldPK": "", "fieldFK": "", "fieldFKName": "", "VPN": "DM-D-36" }, {"key": "", "imageKey": "", "laboratoryID": "", "laboratoryName": "", "laboratoryID2": "", "laboratoryName2": "", "rowIndex": 20, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "", "fontFamily": "微軟正黑體", "fontSize": "21", "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#c0c0c0", "tabIndex": "", "color": "#000000", "PK": "", "FK": "", "fieldPK": "", "fieldFK": "", "fieldFKName": "", "VPN": "" }, {"key": "", "imageKey": "", "laboratoryID": "", "laboratoryName": "", "laboratoryID2": "", "laboratoryName2": "", "rowIndex": 20, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "", "fontFamily": "微軟正黑體", "fontSize": "21", "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#c0c0c0", "tabIndex": "", "color": "#000000", "PK": "", "FK": "", "fieldPK": "", "fieldFK": "", "fieldFKName": "", "VPN": "" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 21, "columnIndex": 0, "rowSpan": 1, "colSpan": 4, "text": "其他檢查資料", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "bold", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#cc99ff", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 22, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "左腳足部檢查", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "c9726abc-10a9-4b35-b2f6-c0de28432156", "imageKey": "", "laboratoryID": "", "rowIndex": 22, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "下拉選單", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "0：正常\n1：異常", "borderParaList": "", "itemType": "ComboBox", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-32" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 22, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "右腳足部檢查", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#ffffff", "color": "#000000" }, {"key": "a8acd191-fe25-42e5-a2b9-3844adc3322e", "imageKey": "", "laboratoryID": "", "rowIndex": 22, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "下拉選單", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "0：正常\n1：異常", "borderParaList": "", "itemType": "ComboBox", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-33" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 23, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "眼睛檢查及病變", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "ad961148-a6f7-44bc-ac9f-6dd37c843bb4", "imageKey": "", "laboratoryID": "", "rowIndex": 23, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "下拉選單", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "0：未做\n1：正常\n2：異常", "borderParaList": "", "itemType": "ComboBox", "background": "#ffffcc", "color": "#000000", "VPN": "DM-D-35" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 23, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#c0c0c0", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 23, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#c0c0c0", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 24, "columnIndex": 0, "rowSpan": 1, "colSpan": 4, "text": "結案資料", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "bold", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#cc99ff", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 25, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "結案日期", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "8c5a34cd-e8f9-4bc3-aa83-2a852aae849d", "imageKey": "", "laboratoryID": "", "rowIndex": 25, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "【 日期 】", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Date", "background": "#ffffcc", "color": "#000000", "VPN": "DM-C-06" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 25, "columnIndex": 2, "rowSpan": 1, "colSpan": 1, "text": "", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#c0c0c0", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 25, "columnIndex": 3, "rowSpan": 1, "colSpan": 1, "text": "", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "#c0c0c0", "color": "#000000" }, {"key": "", "imageKey": "", "laboratoryID": "", "rowIndex": 26, "columnIndex": 0, "rowSpan": 1, "colSpan": 1, "text": "結案原因", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "center", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "None", "background": "", "color": "#000000" }, {"key": "5cc956aa-abdd-4e08-87ed-d87c7b5e36d3", "imageKey": "", "laboratoryID": "", "rowIndex": 26, "columnIndex": 1, "rowSpan": 1, "colSpan": 1, "text": "下拉選單", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "\n1：失聯超過90天以上\n2：病人拒絕接受治療\n3：經評估可自行照護\n4：病人遷移\n5：死亡\n6：其他", "borderParaList": "", "itemType": "ComboBox", "background": "#ffffcc", "color": "#000000", "VPN": "DM-C-07" }, {"key": "1fc84c33-a29d-4eda-adb1-1b24229a9bd1", "imageKey": "", "laboratoryID": "", "rowIndex": 26, "columnIndex": 2, "rowSpan": 1, "colSpan": 2, "text": "文字輸入", "fontFamily": "微軟正黑體", "fontSize": 21, "fontWeight": "", "fontStyle": "", "textAlign": "left", "multiLine": false, "groupName": "", "isChecked": false, "comboContent": "", "borderParaList": "", "itemType": "Text", "background": "#ffffcc", "color": "#000000", "VPN": "DM-C-08" }];
}
//清空選項
    function empty() {
        $('#input').val("");
    $(".filter_1")[0].selectedIndex = 0
    $(".filter_2")[0].selectedIndex = 0
    $('.bdaymonth_1').val("");
    $('.bdaymonth_2').val("");
    $('#table_a').empty();
}

    function chart_js() {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
        type: 'line',
            data: {
        //X軸                
        labels: arr.time,
    datasets: [
                    {
        label: 'Long acting',
    data: [mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r()],
    //下方是否填滿
    fill: false,
    lineTension:0,
    backgroundColor: 'rgba(255, 0, 0, 100)',//點的顏色
    borderColor: 'rgba(255, 0, 0, 100)',//線的顏色
},
                    {
        label: 'Premixed',
    data: [mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r()],
    //下方是否填滿
    fill: false,
    lineTension: 0,
    backgroundColor: 'rgba(255, 255, 0, 100)',//點的顏色
    borderColor: 'rgba(255, 255, 0, 100)',//線的顏色
},
                    {
        label: 'Novorapid',
    data: [mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s()],
    //下方是否填滿
    fill: false,
    lineTension: 0,
    backgroundColor: 'rgba(0, 0, 255, 100)',//點的顏色
    borderColor: 'rgba(0, 0, 255, 100)',//線的顏色
},
                    {
        label: 'Victoza',
    data: [mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s()],
    //下方是否填滿
    fill: false,
    lineTension: 0,
    backgroundColor: 'rgba(0, 255, 255, 100)',//點的顏色
    borderColor: 'rgba(0, 255, 255, 100)',//線的顏色
},
                    {
        label: 'Trulicity1.5',
    data: [mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s(), mathfloor_s()],
    //下方是否填滿
    fill: false,
    lineTension: 0,
    backgroundColor: 'rgba(255, 0, 255, 100)',//點的顏色
    borderColor: 'rgba(255, 0, 255, 100)',//線的顏色
},
                    {
        label: 'Long acting',
    data: [mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r(), mathfloor_r()],
    //下方是否填滿
    fill: false,
    lineTension: 0,
    backgroundColor: 'rgba(0, 255, 0, 100)',//點的顏色
    borderColor: 'rgba(0, 255, 0, 100)',//線的顏色
},
]
},
            options: {
        scales: {
        yAxes: [{
        ticks: {
        beginAtZero: true
}
}]
}
}
});
}

    function mathfloor_r(){
        var r = Math.floor(Math.random() * 100) + 0;
    return r
}
    function mathfloor_s() {
        var s = Math.floor(Math.random() * 100) + 100;
    return s
}

