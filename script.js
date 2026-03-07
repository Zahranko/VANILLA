// صور افتراضية عالية الجودة تناسب كل قسم (من Unsplash)
const defaultImages = {
    hotDrinks: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
    coldDrinks: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=400&q=80",
    desserts: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
    shisha: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=400&q=80",
    juices: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&q=80"
};

// البيانات المستخرجة من الصور
const menuData = [
    // --- مشروبات ساخنة ---
    { category: "مشروبات ساخنة", name: "اسبرسو دبل", price: "2.00 JD", img: defaultImages.hotDrinks },
    { category: "مشروبات ساخنة", name: "اسبرسو مكياتو", price: "2.50 JD", img: defaultImages.hotDrinks },
    { category: "مشروبات ساخنة", name: "امريكانو", price: "2.00 JD", img: defaultImages.hotDrinks },
    { category: "مشروبات ساخنة", name: "لاتيه", price: "2.50 JD", img: defaultImages.hotDrinks },
    { category: "مشروبات ساخنة", name: "كابتشينو", price: "2.50 JD", img: defaultImages.hotDrinks },
    { category: "مشروبات ساخنة", name: "كراميل مكياتو", price: "2.50 JD", img: defaultImages.hotDrinks },
    { category: "مشروبات ساخنة", name: "دارك موكا", price: "2.50 JD", img: defaultImages.hotDrinks },
    { category: "مشروبات ساخنة", name: "وايت موكا", price: "2.50 JD", img: defaultImages.hotDrinks },
    { category: "مشروبات ساخنة", name: "سبانيش لاتيه", price: "2.50 JD", img: defaultImages.hotDrinks },
    { category: "مشروبات ساخنة", name: "فلات وايت", price: "2.50 JD", img: defaultImages.hotDrinks },
    { category: "مشروبات ساخنة", name: "هوت شوكليت", price: "2.50 JD", img: defaultImages.hotDrinks },
    { category: "مشروبات ساخنة", name: "تركي سنجل", price: "1.50 JD", img: defaultImages.hotDrinks },
    { category: "مشروبات ساخنة", name: "تركي دبل", price: "2.00 JD", img: defaultImages.hotDrinks },
    { category: "مشروبات ساخنة", name: "شاي كرك", price: "2.00 JD", img: defaultImages.hotDrinks },
    { category: "مشروبات ساخنة", name: "ابريق شاي", price: "3.00 JD", img: defaultImages.hotDrinks },

    // --- ايس كوفي و فرابيه ---
    { category: "ايس كوفي", name: "ايس فانليا لاتيه", price: "3.00 JD", img: defaultImages.coldDrinks },
    { category: "ايس كوفي", name: "ايس بستاشيو لاتيه", price: "3.00 JD", img: defaultImages.coldDrinks },
    { category: "ايس كوفي", name: "ايس امريكانو", price: "2.50 JD", img: defaultImages.coldDrinks },
    { category: "ايس كوفي", name: "ايس سبانيش لاتيه", price: "2.50 JD", img: defaultImages.coldDrinks },
    { category: "فرابيه", name: "كراميل فرابيه", price: "3.00 JD", img: defaultImages.coldDrinks },
    { category: "فرابيه", name: "موكا فرابيه", price: "3.00 JD", img: defaultImages.coldDrinks },

    // --- عصائر فريش ---
    { category: "عصائر فريش", name: "فانليا كوكتيل سبيشل", price: "3.50 JD", img: defaultImages.juices },
    { category: "عصائر فريش", name: "فرولة", price: "2.50 JD", img: defaultImages.juices },
    { category: "عصائر فريش", name: "برتقال", price: "2.50 JD", img: defaultImages.juices },
    { category: "عصائر فريش", name: "مانجا فرغلي", price: "3.00 JD", img: defaultImages.juices },
    { category: "عصائر فريش", name: "افوكادو قشطه", price: "3.00 JD", img: defaultImages.juices },

    // --- موهيتو و مشروبات غازية ---
    { category: "موهيتو", name: "ريد بول", price: "3.00 JD", img: defaultImages.coldDrinks },
    { category: "موهيتو", name: "بوم بوم", price: "2.50 JD", img: defaultImages.coldDrinks },
    { category: "مشروبات غازية", name: "كينزا 7UP - بيبسي", price: "1.00 JD", img: defaultImages.coldDrinks },

    // --- سموذي و ميلك شيك ---
    { category: "سموذي", name: "بلو بيري", price: "2.50 JD", img: defaultImages.juices },
    { category: "سموذي", name: "باشن فروت", price: "2.50 JD", img: defaultImages.juices },
    { category: "ميلك شيك", name: "اوريو", price: "3.00 JD", img: defaultImages.desserts },
    { category: "ميلك شيك", name: "لوتس", price: "3.00 JD", img: defaultImages.desserts },
    { category: "ميلك شيك", name: "بستاشيو", price: "3.00 JD", img: defaultImages.desserts },

    // --- حلويات (وافل، كريب، بان كيك) ---
    { category: "حلويات", name: "وافل شوكولاته", price: "2.00 JD", img: defaultImages.desserts },
    { category: "حلويات", name: "وافل فواكه وايسكريم", price: "3.50 JD", img: defaultImages.desserts },
    { category: "حلويات", name: "كريب لوتس", price: "3.00 JD", img: defaultImages.desserts },
    { category: "حلويات", name: "كريب فوتوتشيني", price: "3.00 JD", img: defaultImages.desserts },
    { category: "حلويات", name: "بان كيك مكس", price: "3.00 JD", img: defaultImages.desserts },

    // --- اراجيل ---
    { category: "اراجيل", name: "فانليا سبيشل", price: "4.00 JD", img: defaultImages.shisha },
    { category: "اراجيل", name: "نخله تفاحتين", price: "4.00 JD", img: defaultImages.shisha },
    { category: "اراجيل", name: "ليمون ونعنع", price: "3.50 JD", img: defaultImages.shisha },
    { category: "اراجيل", name: "بطيخ ونعنع", price: "3.50 JD", img: defaultImages.shisha },
    { category: "اراجيل", name: "عنب وتوت", price: "3.50 JD", img: defaultImages.shisha },
    { category: "اراجيل", name: "بلو بيري", price: "3.50 JD", img: defaultImages.shisha }
];

// استخراج الأقسام الفريدة من الداتا
const categories = ["الكل", ...new Set(menuData.map(item => item.category))];

const navContainer = document.getElementById('categories-nav');
const menuGrid = document.getElementById('menu-grid');

// دالة لإنشاء أزرار الأقسام
function renderCategories() {
    categories.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.classList.add('category-btn');
        if(index === 0) btn.classList.add('active'); // زر "الكل" فعال افتراضيا
        btn.innerText = cat;
        
        btn.addEventListener('click', () => {
            // إزالة الكلاس الفعال من كل الأزرار
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(cat);
        });
        
        navContainer.appendChild(btn);
    });
}

// دالة لعرض المنتجات
function renderMenu(filterCategory = "الكل") {
    menuGrid.innerHTML = ""; // تفريغ الشبكة
    
    // فلترة المنتجات
    const filteredData = filterCategory === "الكل" 
        ? menuData 
        : menuData.filter(item => item.category === filterCategory);

    // إذا كنا نعرض "الكل"، سنقوم بتقسيمها بعناوين
    if(filterCategory === "الكل") {
        const uniqueCategories = [...new Set(filteredData.map(item => item.category))];
        
        uniqueCategories.forEach(cat => {
            // إضافة عنوان القسم
            const titleDiv = document.createElement('div');
            titleDiv.className = 'section-title-container';
            titleDiv.innerHTML = `<h3 class="section-title">${cat}</h3>`;
            menuGrid.appendChild(titleDiv);

            // إضافة منتجات القسم
            const itemsInCat = filteredData.filter(item => item.category === cat);
            itemsInCat.forEach(item => {
                menuGrid.appendChild(createCard(item));
            });
        });
    } else {
        // عرض المنتجات بدون عناوين إذا كان القسم محدداً
        filteredData.forEach(item => {
            menuGrid.appendChild(createCard(item));
        });
    }
}

// دالة مساعدة لإنشاء بطاقة المنتج HTML
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="card-img">
        <div class="card-content">
            <span class="item-name">${item.name}</span>
            <span class="item-price">${item.price}</span>
        </div>
    `;
    return card;
}

// تشغيل الدوال عند تحميل الصفحة
renderCategories();
renderMenu();