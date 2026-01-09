// CHEN HUB 数据中心 V19.0 (时间段密码系统版)
// 核心逻辑：密码根据时间段系统生成，每个时段有独立密码规则
// 密码规则：时间段代码 + 日期编码 + 课程编码

// 密码生成规则说明：
// 上午时段（08:00-12:30）：AM + 日期后4位 + 课程编号
// 下午时段（14:30-19:30）：PM + 日期后4位 + 课程编号
// 晚上时段（19:30-21:00）：EV + 日期后4位 + 课程编号
// Online时段：OL + 日期后4位 + 课程编号

const COURSE_DB = [
    
    // --- 课程组 1：数理化小组课 ---
    {
        name: "📚 数理化小组课",
        lessons: [
            {
                date: "2025-12-24",
                timeSlot: "0800",
                displayTime: "08:00 - 09:30",
                password: "AM122401",  // AM(上午) + 1224(日期) + 01(课程编号)
                topic: "导数极值点偏移",
                note: "小组课视频解析与板书。",
                folder: "20251224_G3SX_0800",
                simpleFiles: ["1.pdf", "V16.mp4"]
            },
            {
                date: "2025-12-25",
                timeSlot: "0930",
                displayTime: "09:30 - 11:00",
                password: "AM122502",  // AM(上午) + 1225(日期) + 02(课程编号)
                topic: "圣诞节专题训练",
                note: "数列放缩法。",
                folder: "20251225_G3SX",
                simpleFiles: ["1.pdf"]
            },
            {
                date: "2025-12-26",
                timeSlot: "1100",
                displayTime: "11:00 - 12:30",
                password: "AM122603",  // AM(上午) + 1226(日期) + 03(课程编号)
                topic: "三角函数综合应用",
                note: "三角函数与向量结合。",
                folder: "20251226_G3SX",
                simpleFiles: ["1.pdf", "V17.mp4"]
            }
        ]
    },

    // --- 课程组 2：Eric 数学一对一 ---
    {
        name: "📐 Eric 数学一对一",
        lessons: [
            {
                date: "2025-12-24",
                timeSlot: "1430",
                displayTime: "14:30 - 16:00",
                password: "PM122401",  // PM(下午) + 1224(日期) + 01(课程编号)
                topic: "期末模拟试卷讲评",
                note: "下午时段：试卷分析与错题讲解。",
                folder: "20251224_Eric_1430",
                simpleFiles: ["Eric_HW.pdf", "答案解析.pdf"]
            },
            {
                date: "2025-12-24",
                timeSlot: "1930",
                displayTime: "19:30 - 21:00",
                password: "EV122401",  // EV(晚上) + 1224(日期) + 01(课程编号)
                topic: "考前突击答疑",
                note: "晚间时段：错题巩固与知识点梳理。",
                folder: "20251224_Eric_1930",
                simpleFiles: ["1.pdf", "考点总结.pdf"]
            },
            {
                date: "2025-12-25",
                timeSlot: "1500",
                displayTime: "15:00 - 16:30",
                password: "PM122502",  // PM(下午) + 1225(日期) + 02(课程编号)
                topic: "立体几何专题训练",
                note: "空间向量法解题技巧。",
                folder: "20251225_Eric_1500",
                simpleFiles: ["立体几何.pdf", "V18.mp4"]
            }
        ]
    },

    // --- 课程组 3：物理提升班 ---
    {
        name: "⚛️ 物理提升班",
        lessons: [
            {
                date: "2025-12-27",
                timeSlot: "1630",
                displayTime: "16:30 - 18:00",
                password: "PM122701",  // PM(下午) + 1227(日期) + 01(课程编号)
                topic: "电磁感应定律",
                note: "法拉第电磁感应定律与楞次定律。",
                folder: "20251227_Physics",
                simpleFiles: ["电磁感应.pdf", "实验视频.mp4"]
            },
            {
                date: "2025-12-28",
                timeSlot: "1800",
                displayTime: "18:00 - 19:30",
                password: "PM122801",  // PM(下午) + 1228(日期) + 01(课程编号)
                topic: "牛顿运动定律综合",
                note: "多物体系统受力分析。",
                folder: "20251228_Physics",
                simpleFiles: ["牛顿定律.pdf"]
            }
        ]
    },

    // --- 课程组 4：在线答疑课 ---
    {
        name: "💻 在线答疑专场",
        lessons: [
            {
                date: "2025-12-29",
                timeSlot: "online",
                displayTime: "Online 随时",
                password: "OL122901",  // OL(Online) + 1229(日期) + 01(课程编号)
                topic: "在线答疑与作业辅导",
                note: "线上实时答疑，可随时提问。请提前准备好问题。",
                folder: "20251229_G3SX_online",
                simpleFiles: ["常见问题汇总.pdf", "答疑记录.pdf"]
            },
            {
                date: "2025-12-30",
                timeSlot: "online",
                displayTime: "Online 随时",
                password: "OL123001",  // OL(Online) + 1230(日期) + 01(课程编号)
                topic: "期末冲刺在线课",
                note: "期末考试重点难点突破。",
                folder: "20251230_G3SX_online",
                simpleFiles: ["冲刺资料.pdf", "V19.mp4"]
            }
        ]
    }
];