// صور افتراضية عالية الجودة تناسب كل قسم (من Unsplash)
const defaultImages = {
    hotDrinks: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
    coldDrinks: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=400&q=80",
    desserts: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
    shisha: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=400&q=80",
    juices: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&q=80",
    milkshake:"https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=400&q=80",
    snacks:"Gemini_Generated_Image_di6ki9di6ki9di6k1.png",
    smoothie:"https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=400&q=80"
};

// البيانات المستخرجة من الصور
const menuData = [
    // --- مشروبات ساخنة ---
    { category: "مشروبات ساخنه", name: "اسبرسو دبل", price: "2.00 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "اسبرسو مكياتو", price: "2.50 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "امريكانو", price: "2.00 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "لاتيه", price: "2.50 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "كابتشينو", price: "2.50 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "كراميل مكياتو", price: "2.50 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "دارك موكا", price: "2.50 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "وايت موكا", price: "2.50 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "سبانيش لاتيه", price: "2.50 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "فلات وايت", price: "2.50 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "كرتادو", price: "2.50 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "هوت شوكليت", price: "2.50 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "تركي سنجل", price: "1.50 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "تركي دبل", price: "2.00 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "شاي كرك", price: "2.00 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "نسكافيه", price: "2.00 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "ابريق شاي", price: "3.00 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "شاي احمر - شاي اخضر", price: "1.00 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "اعشاب", price: "1.00 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "نسكافيه", price: "2.00 JD", img: defaultImages.hotDrinks },
  { category: "مشروبات ساخنه", name: "اضافة اسبرسو", price: "1.50 JD", img: defaultImages.hotDrinks },

    // --- ايس كوفي و فرابيه ---
    { category: "ايس كوفي", name: "فانيليا ايس كوفي سبيشل", price: "3.50 JD", img: defaultImages.coldDrinks },
  { category: "ايس كوفي", name: "ايس امريكانو", price: "2.50 JD", img: defaultImages.coldDrinks },
  { category: "ايس كوفي", name: "ايس لاتيه", price: "2.50 JD", img: defaultImages.coldDrinks },
  { category: "ايس كوفي", name: "ايس كراميل مكياتو", price: "3.00 JD", img: defaultImages.coldDrinks },
  { category: "ايس كوفي", name: "ايس دارك موكا", price: "3.00 JD", img: defaultImages.coldDrinks },
  { category: "ايس كوفي", name: "ايس وايت موكا", price: "3.00 JD", img: defaultImages.coldDrinks },
  { category: "ايس كوفي", name: "ايس سبانيش لاتيه", price: "3.00 JD", img: defaultImages.coldDrinks },
  { category: "ايس كوفي", name: "ايس بستاشيو", price: "3.00 JD", img: defaultImages.coldDrinks },
  { category: "ايس كوفي", name: "ايس رد فيلفيت", price: "3.00 JD", img: defaultImages.coldDrinks },
  { category: "ايس كوفي", name: "ايس تي", price: "2.50 JD", img: defaultImages.coldDrinks },
   // --- ايس كوفي و فرابيه ---
    { category: "فرابيه", name: "كراميل فرابيه", price: "3.00 JD", img: defaultImages.coldDrinks },
    { category: "فرابيه", name: "موكا فرابيه", price: "3.00 JD", img: defaultImages.coldDrinks },
     { category: "فرابيه", name: "فانيلا فرابيه", price: "3.00 JD", img: defaultImages.coldDrinks },
    { category: "فرابيه", name: "قهوة فرابيه", price: "3.00 JD", img: defaultImages.coldDrinks },

    // --- عصائر فريش ---
  { category: "عصائر فريش", name: "فانيليا كوكتيل سبيشل", price: "3.50 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "فرولة", price: "2.50 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "برتقال", price: "2.50 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "اناناس", price: "2.50 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "ليمون", price: "2.50 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "مانجا فرغلي", price: "3.00 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "كيوي", price: "3.00 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "ليمون ونعنع", price: "2.50 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "ليمون وكيوي", price: "3.00 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "افوكادو", price: "2.50 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "افوكادو قشطه", price: "3.00 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "موز بحليب", price: "2.50 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "موز فرولة بحليب", price: "2.50 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "باشن مانجو", price: "2.50 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "اناناس كيوي ليمون", price: "2.50 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "جراندين برتقال اناناس", price: "2.50 JD", img: defaultImages.coldDrinks },
  { category: "عصائر فريش", name: "اضافة قشطة", price: "1.00 JD", img: defaultImages.coldDrinks },

    // --- موهيتو ---
    { category: "موهيتو", name: "ريد بول", price: "3.00 JD", img: defaultImages.coldDrinks },
    { category: "موهيتو", name: "بوم بوم", price: "2.50 JD", img: defaultImages.coldDrinks },
    { category: "موهيتو", name: "بي ام", price: "2.00 JD", img: defaultImages.coldDrinks },
    { category: "موهيتو", name: "G صودا", price: "2.00 JD", img: defaultImages.coldDrinks },
    { category: "موهيتو", name: "7UP كينزا", price: "2.00 JD", img: defaultImages.coldDrinks },
    // --- مشروبات غازية ---
    { category: "مشروبات غازية", name: "ريد بول", price: "2.50 JD", img: defaultImages.coldDrinks },
    { category: "مشروبات غازية", name: "بوم بوم", price: "2.00 JD", img: defaultImages.coldDrinks },
    { category: "مشروبات غازية", name: "بي ام", price: "1.50 JD", img: defaultImages.coldDrinks },
    { category: "مشروبات غازية", name: "بربيكان", price: "1.50 JD", img: defaultImages.coldDrinks },
    { category: "مشروبات غازية", name: "G صودا", price: "1.50 JD", img: defaultImages.coldDrinks },
    { category: "مشروبات غازية", name: "كينزا 7UP - بيبسي", price: "1.00 JD", img: defaultImages.coldDrinks },

    // --- سموذي و ميلك شيك ---
  { category: "سموذي", name: "سموذي فرولة", price: "2.50 JD", img: defaultImages.smoothie },
  { category: "سموذي", name: "سموذي اناناس", price: "2.50 JD", img: defaultImages.smoothie },
  { category: "سموذي", name: "سموذي بلو بيري", price: "2.50 JD", img: defaultImages.smoothie },
  { category: "سموذي", name: "سموذي مانجا", price: "2.50 JD", img: defaultImages.smoothie },
  { category: "سموذي", name: "سموذي مكس بيري", price: "2.50 JD", img: defaultImages.smoothie },
  { category: "سموذي", name: "سموذي جوز هند", price: "2.50 JD", img: defaultImages.smoothie },
  { category: "سموذي", name: "سموذي بطيخ", price: "2.50 JD", img: defaultImages.smoothie },
  { category: "سموذي", name: "سموذي باشن فروت", price: "2.50 JD", img: defaultImages.smoothie },
  { category: "سموذي", name: "سموذي ليمون", price: "2.50 JD", img: defaultImages.smoothie },
  { category: "سموذي", name: "سموذي كلمنتينا", price: "2.50 JD", img: defaultImages.smoothie },
  // --- سموذي و ميلك شيك ---
  { category: "ميلك شيك", name: "فانيليا ميلك شيك سبيشل", price: "3.50 JD", img: defaultImages.milkshake },
  { category: "ميلك شيك", name: "ميلك شيك فانيليا", price: "3.00 JD", img: defaultImages.milkshake },
  { category: "ميلك شيك", name: "ميلك شيك شوكولاته", price: "3.00 JD", img: defaultImages.milkshake },
  { category: "ميلك شيك", name: "ميلك شيك فرولة", price: "3.00 JD", img: defaultImages.milkshake },
  { category: "ميلك شيك", name: "ميلك شيك اوريو", price: "3.00 JD", img: defaultImages.milkshake },
  { category: "ميلك شيك", name: "ميلك شيك لوتس", price: "3.00 JD", img: defaultImages.milkshake },
  { category: "ميلك شيك", name: "ميلك شيك كندر", price: "3.00 JD", img: defaultImages.milkshake },
  { category: "ميلك شيك", name: "ميلك شيك بستاشيو", price: "3.50 JD", img: defaultImages.milkshake },
  { category: "ميلك شيك", name: "ميلك شيك نوتيلا", price: "3.00 JD", img: defaultImages.milkshake },
  // قسم آيس تي
  { category: "آيس تي", name: "آيس تي خوخ", price: "2.00 JD", img: defaultImages.coldDrinks },
  { category: "آيس تي", name: "آيس تي ليمون", price: "2.00 JD", img: defaultImages.coldDrinks },
  { category: "آيس تي", name: "آيس تي مانجا", price: "2.00 JD", img: defaultImages.coldDrinks },

  // قسم تسالي
  { category: "تسالي", name: "مكسرات", price: "1.50 JD", img: defaultImages.snacks },
  { category: "تسالي", name: "بوشار", price: "1.00 JD", img: defaultImages.snacks },
  { category: "تسالي", name: "شرحات ليمون", price: "0.25 JD", img: defaultImages.snacks },
 // --- ايسكريم
  { category: "ايسكريم", name: "ايسكريم فانيليا سبيشل", price: "2.00 JD", img: defaultImages.desserts },
  { category: "ايسكريم", name: "ايسكريم كلاسيك", price: "2.00 JD", img: defaultImages.desserts },
  { category: "ايسكريم", name: "ايسكريم بلوبيري", price: "2.00 JD", img: defaultImages.desserts },
  { category: "ايسكريم", name: "ايسكريم فرولة", price: "2.00 JD", img: defaultImages.desserts },
  { category: "ايسكريم", name: "ايسكريم رمان", price: "2.00 JD", img: defaultImages.desserts },
  { category: "ايسكريم", name: "ايسكريم كرز", price: "2.00 JD", img: defaultImages.desserts },
  { category: "ايسكريم", name: "ايسكريم بطيخ", price: "2.00 JD", img: defaultImages.desserts },
  { category: "ايسكريم", name: "ايسكريم باشن فروت", price: "2.00 JD", img: defaultImages.desserts },
  { category: "ايسكريم", name: "ايسكريم خوخ", price: "2.00 JD", img: defaultImages.desserts },
  { category: "ايسكريم", name: "ايسكريم اناناس", price: "2.00 JD", img: defaultImages.desserts },
  { category: "ايسكريم", name: "ايسكريم تفاح اخضر", price: "2.00 JD", img: defaultImages.desserts },
  { category: "ايسكريم", name: "ايسكريم سن شاين", price: "2.00 JD", img: defaultImages.desserts },
  { category: "ايسكريم", name: "ايسكريم ريد بول", price: "2.00 JD", img: defaultImages.desserts },

    // --- حلويات (وافل) ---
    { category: "وافل", name: "وافل شوكولاته", price: "2.00 JD", img: defaultImages.desserts },
    { category: "وافل", name: "وافل فواكه", price: "3.00 JD", img: defaultImages.desserts },
    { category: "وافل", name: "وافل فواكه وايسكريم", price: "3.50 JD", img: defaultImages.desserts },
     { category: "وافل", name: "وافل اوريو", price: "3.00 JD", img: defaultImages.desserts },
    { category: "وافل", name: "وافل لوتس", price: "3.00 JD", img: defaultImages.desserts },
     { category: "وافل", name: "وافل كندر", price: "3.00 JD", img: defaultImages.desserts },
    { category: "وافل", name: "وافل مكس", price: "3.50 JD", img: defaultImages.desserts },
      { category: "وافل", name: "وافل بستاشيو", price: "3.50 JD", img: defaultImages.desserts },
     { category: "وافل", name: "وافل وايت شوكليت", price: "3.00 JD", img: defaultImages.desserts },
    { category: "وافل", name: "وافل مارشملو", price: "3.00 JD", img: defaultImages.desserts },
    // --- حلويات (كريب) ---
    { category: "كريب", name: "كريب شوكولاته", price: "2.00 JD", img: defaultImages.desserts },
  { category: "كريب", name: "كريب فواكه", price: "3.00 JD", img: defaultImages.desserts },
  { category: "كريب", name: "كريب فواكه وايسكريم", price: "3.50 JD", img: defaultImages.desserts },
  { category: "كريب", name: "كريب اوريو", price: "3.00 JD", img: defaultImages.desserts },
  { category: "كريب", name: "كريب لوتس", price: "3.50 JD", img: defaultImages.desserts },
  { category: "كريب", name: "كريب كندر", price: "3.50 JD", img: defaultImages.desserts },
  { category: "كريب", name: "كريب مكس", price: "3.50 JD", img: defaultImages.desserts },
  { category: "كريب", name: "كريب بستاشيو", price: "3.50 JD", img: defaultImages.desserts },
  { category: "كريب", name: "كريب سوشي", price: "3.00 JD", img: defaultImages.desserts },
  { category: "كريب", name: "كريب فوتوتشيني", price: "3.50 JD", img: defaultImages.desserts },
    //
  { category: "بان كيك", name: "بان كيك شوكولاته", price: "2.50 JD", img: defaultImages.desserts },
  { category: "بان كيك", name: "بان كيك فواكه", price: "3.50 JD", img: defaultImages.desserts },
  { category: "بان كيك", name: "بان كيك فواكه وايسكريم", price: "4.00 JD", img: defaultImages.desserts },
  { category: "بان كيك", name: "بان كيك اوريو", price: "3.00 JD", img: defaultImages.desserts },
  { category: "بان كيك", name: "بان كيك لوتس", price: "3.00 JD", img: defaultImages.desserts },
  { category: "بان كيك", name: "بان كيك كندر", price: "3.00 JD", img: defaultImages.desserts },
  { category: "بان كيك", name: "بان كيك مكس", price: "3.00 JD", img: defaultImages.desserts },
  { category: "بان كيك", name: "بان كيك بستاشيو", price: "3.50 JD", img: defaultImages.desserts },
  { category: "بان كيك", name: "بان كيك وايت شوكليت", price: "3.00 JD", img: defaultImages.desserts },
  { category: "بان كيك", name: "بان كيك مارشملو", price: "3.00 JD", img: defaultImages.desserts },
    

    // --- اراجيل ---
    { category: "اراجيل", name: "فانليا سبيشل", price: "4.00 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "نخله تفاحتين", price: "4.00 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "مزايا تفاحتين", price: "3.50 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "فاخر تفاحتين", price: "3.50 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "ليمون ونعنع", price: "3.50 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "بطيخ ونعنع", price: "3.50 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "علكة وقرفه", price: "3.50 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "علكة سهم", price: "3.50 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "علكه وقرفه ونعنع", price: "3.50 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "عنب وتوت", price: "3.50 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "عنب ونعنع", price: "3.50 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "بلو بيري", price: "3.50 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "كاندي", price: "3.50 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "LOVE", price: "3.50 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "روبي كراش", price: "3.50 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "زغلول", price: "3.50 JD", img: defaultImages.shisha },
  { category: "اراجيل", name: "راس ارجيلة", price: "2.00 JD", img: defaultImages.shisha }
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
