// CHEN HUB 数据中心 V18.0 (单课单码版)
// 核心逻辑：密码绑定在“每一节课”上，就像电影票一样，场次不对，票就无效。

const COURSE_DB = [
    
    // --- 课程组 1：数理化小组课 ---
    {
        name: "📚 数理化小组课", // 只是个名字，不再存通用密码
        lessons: [
            {
                date: "2025-12-24",
                timeSlot: "0800",
                displayTime: "08:00 - 09:30",
                
                password: "123",  // 🔥 只有这节课用这个密码
                
                topic: "导数极值点偏移",
                note: "小组课视频解析与板书。",
                folder: "20251224_G3SX_0800",
                simpleFiles: ["1.pdf", "V16.mp4"]
            },
            {
                date: "2025-12-25", // 假设这是第二天的课
                timeSlot: "0800",
                displayTime: "08:00 - 09:30",
                
                password: "456",  // 🔥 必须换个密码，防止学生猜到
                
                topic: "圣诞节专题训练",
                note: "数列放缩法。",
                folder: "20251225_G3SX",
                simpleFiles: ["1.pdf"]
            }
        ]
    },

    // --- 课程组 2：Eric 一对一 ---
    {
        name: "📐 Eric 数学一对一",
        lessons: [
            {
                date: "2025-12-24",
                timeSlot: "1430",
                displayTime: "14:30 - 16:00",
                
                password: "888", // 🔥 Eric 下午课的密码
                
                topic: "期末模拟试卷讲评",
                note: "下午时段：试卷分析。",
                folder: "20251224_G3SX_0800",
                simpleFiles: ["Eric_HW.pdf"]
            },
            {
                date: "2025-12-24",
                timeSlot: "1930",
                displayTime: "19:30 - 21:00",
                
                password: "999", // 🔥 Eric 晚上课的密码 (如果不希望他用888混进去，就改掉)
                
                topic: "考前突击答疑",
                note: "晚间时段：错题巩固。",
                folder: "20251224_G3SX_0800",
                simpleFiles: ["1.pdf"]
            }
        ]
    }
];