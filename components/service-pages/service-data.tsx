import type { LucideIcon } from 'lucide-react'
import {
  AirVent,
  Armchair,
  Baby,
  BadgeCheck,
  Beef,
  Building2,
  CakeSlice,
  Camera,
  Car,
  ChefHat,
  Clock,
  Coffee,
  Cookie,
  CookingPot,
  Croissant,
  Crown,
  Drumstick,
  Fish,
  Flower2,
  Flame,
  Gift,
  Images,
  Landmark,
  Leaf,
  LockKeyhole,
  Mic,
  Moon,
  Monitor,
  PackageCheck,
  ParkingCircle,
  PartyPopper,
  Projector,
  Salad,
  ShieldCheck,
  Snowflake,
  Soup,
  Sparkles,
  Star,
  Sun,
  Trees,
  Umbrella,
  UsersRound,
  Utensils,
  UtensilsCrossed,
  Volume2,
  Wheat,
} from 'lucide-react'
import { siteImages } from '@/lib/assets'

export type ServiceCard = {
  title: string
  desc: string
  image?: string
  icon: LucideIcon
}

export type ServicePageData = {
  slug: string
  variant: 'garden' | 'mandi' | 'bakery' | 'eastern' | 'hall'
  eyebrow: string
  title: string
  subtitle: string
  intro: string
  heroImage: string
  secondaryImage: string
  Icon: LucideIcon
  heroStats: ServiceCard[]
  story: {
    kicker: string
    title: string
    body: string
    points: ServiceCard[]
  }
  categoriesTitle: string
  categories: ServiceCard[]
  showcaseTitle: string
  showcase: ServiceCard[]
  featureTitle: string
  features: ServiceCard[]
  galleryTitle: string
  gallery: string[]
  closingTitle: string
  closingText: string
}

export const servicePages: Record<string, ServicePageData> = {
  'garden-lounge': {
    slug: 'garden-lounge',
    variant: 'garden',
    eyebrow: 'المنتزه والجلسات',
    title: 'مساحات هادئة للتواصل الجميل',
    subtitle: 'جلسات خارجية تنبض بالهدوء والطبيعة',
    intro:
      'المنتزه في لمة خير صُمم ليكون مساحة مفتوحة للراحة واللقاءات الهادئة، حيث تتوزع الجلسات بين الإضاءة الدافئة والخضرة ومسارات الحركة المريحة.',
    heroImage: siteImages.hero,
    secondaryImage: siteImages.garden,
    Icon: Trees,
    heroStats: [
      { title: 'خصوصية واضحة', desc: 'جلسات موزعة بعناية تمنح كل ضيف مساحة مريحة.', icon: LockKeyhole },
      { title: 'أجواء مسائية', desc: 'إضاءة ناعمة ومسارات تمنح المكان حضوراً دافئاً.', icon: Moon },
      { title: 'طبيعة خلابة', desc: 'خضرة وأشجار ولمسات مائية بتكوين هادئ.', icon: Leaf },
      { title: 'جلسات عائلية', desc: 'مساحات مناسبة للعائلة والأصدقاء.', icon: UsersRound },
    ],
    story: {
      kicker: 'أجواء من الطبيعة والسكينة',
      title: 'تفاصيل تجعل الجلسة أهدأ وأجمل',
      body:
        'كل زاوية في المنتزه مبنية على فكرة الراحة البصرية والخصوصية؛ من توزيع المقاعد إلى مسارات الوصول والإضاءة المحيطة التي تمنح الزائر إحساساً بالدفء من أول لحظة.',
      points: [
        { title: 'جلسات مظللة', desc: 'مناطق محمية من الشمس ومريحة في أوقات مختلفة.', icon: Umbrella },
        { title: 'هواء نقي', desc: 'فراغات مفتوحة تساعد على الاسترخاء والتنفس.', icon: Trees },
        { title: 'إضاءة دافئة', desc: 'مصابيح وفوانيس تضيف طابعاً فاخراً وهادئاً.', icon: Sparkles },
      ],
    },
    categoriesTitle: 'اختر أجواء جلستك',
    categories: [
      { title: 'جلسات خاصة', desc: 'للقاءات الصغيرة والهدوء العالي.', image: siteImages.park, icon: LockKeyhole },
      { title: 'جلسات مسائية', desc: 'أجواء تحت الأضواء والفوانيس.', image: siteImages.galleryGardenNight, icon: Moon },
      { title: 'جلسات مظللة', desc: 'راحة أكثر في أوقات النهار.', image: siteImages.garden, icon: Umbrella },
      { title: 'جلسات عائلية', desc: 'مساحات أوسع للعائلة والأصدقاء.', image: siteImages.galleryOutdoor, icon: UsersRound },
    ],
    showcaseTitle: 'من أجواء المنتزه',
    showcase: [
      { title: 'ممرات مضاءة', desc: 'مسارات واضحة تضيف لمسة شاعرية للحركة داخل المكان.', image: siteImages.hero, icon: Sun },
      { title: 'زوايا تصوير', desc: 'خلفيات طبيعية وفوانيس مناسبة للصور التذكارية.', image: siteImages.galleryOutdoor, icon: Camera },
      { title: 'جلسات حول النافورة', desc: 'نقطة بصرية هادئة تمنح المكان شخصية خاصة.', image: siteImages.garden, icon: Sparkles },
    ],
    featureTitle: 'كل ما تحتاجه لزيارة مريحة',
    features: [
      { title: 'مواقف سيارات', desc: 'وصول أسهل وتجربة أكثر راحة.', icon: ParkingCircle },
      { title: 'سهولة الوصول', desc: 'مداخل ومسارات واضحة للجميع.', icon: Car },
      { title: 'دورات مياه', desc: 'مرافق نظيفة ومجهزة.', icon: ShieldCheck },
      { title: 'مناطق للأطفال', desc: 'مساحات آمنة ومناسبة للصغار.', icon: Baby },
    ],
    galleryTitle: 'لقطات من المكان',
    gallery: [siteImages.galleryOutdoor, siteImages.galleryGardenNight, siteImages.garden, siteImages.hero, siteImages.park],
    closingTitle: 'تجربة هادئة تليق بكل زيارة',
    closingText: 'صفحة تعريفية تبرز أجواء المنتزه والجلسات وتساعد الزائر على تخيّل تجربته قبل الوصول.',
  },

  'yemeni-mandi': {
    slug: 'yemeni-mandi',
    variant: 'mandi',
    eyebrow: 'المندي اليمني',
    title: 'مندي على الأصول في مجلس عربي دافئ',
    subtitle: 'نكهة يمنية أصيلة وتجربة ضيافة تعيشونها بكل تفاصيلها',
    intro:
      'مندي دجاج بأرز عطري ومكسرات وتتبيلة متوازنة، نقدمه في مجلس عربي صُمم لتكون اللمة أدفأ والتجربة أقرب إلى روح الضيافة اليمنية.',
    heroImage: siteImages.mandiMajlisFeast,
    secondaryImage: siteImages.mandiFamilyTray,
    Icon: UtensilsCrossed,
    heroStats: [
      { title: 'طهي على الأصول', desc: 'أسلوب طبخ يحافظ على النكهة والطرواة.', icon: Flame },
      { title: 'بهارات يمنية', desc: 'مزيج متوازن يمنح الطبق عمقاً واضحاً.', icon: Wheat },
      { title: 'أرز عطري', desc: 'حبات مفلفلة ونكهة دافئة.', icon: CookingPot },
      { title: 'مجلس عربي', desc: 'قعدة مريحة بخصوصية وأجواء دافئة.', icon: UsersRound },
    ],
    story: {
      kicker: 'قصة طبق أصيل',
      title: 'طبق يجمع اللمة حول سفرة واحدة',
      body:
        'المندي ليس مجرد طبق؛ هو طقس ضيافة كامل. أرز ملون ومفلفل، دجاج محمّر، مكسرات وصلصات جانبية، وتقديم يليق بالعائلة والأصدقاء داخل مجلس عربي هادئ.',
      points: [
        { title: 'دجاج محمّر', desc: 'طري من الداخل بلون شهي.', icon: Drumstick },
        { title: 'أرز بالمكسرات', desc: 'حبات مفلفلة وتقديم غني.', icon: CookingPot },
        { title: 'إضافات المندي', desc: 'دقوس ولبن وسلطة إلى جانب الطبق.', icon: BadgeCheck },
      ],
    },
    categoriesTitle: 'اختاروا طريقة التقديم',
    categories: [
      { title: 'صينية مندي للّمة', desc: 'صينية واسعة بدجاجة كاملة للمشاركة.', image: siteImages.mandiFamilyTray, icon: UsersRound },
      { title: 'طبق مندي فردي', desc: 'حصة متكاملة مع قطعة دجاج والإضافات.', image: siteImages.mandiSinglePlate, icon: Drumstick },
      { title: 'سفرة داخل المجلس', desc: 'تقديم متكامل في أجواء عربية أصيلة.', image: siteImages.mandiMajlisTable, icon: Crown },
      { title: 'قعدة عربية خاصة', desc: 'مساحة مريحة للضيافة واللقاءات العائلية.', image: siteImages.mandiMajlisDay, icon: UsersRound },
    ],
    showcaseTitle: 'تفاصيل التجربة',
    showcase: [
      { title: 'مندي الدجاج', desc: 'دجاج محمّر فوق أرز عطري مزين بالمكسرات.', image: siteImages.mandiSinglePlate, icon: Drumstick },
      { title: 'جلسة المساء', desc: 'إضاءة دافئة ومجلس يزداد جمالاً عند الغروب.', image: siteImages.mandiMajlisEvening, icon: Crown },
      { title: 'سفرة مكتملة', desc: 'المندي مع الدقوس واللبن والسلطة والخبز.', image: siteImages.mandiMajlisFeast, icon: Utensils },
    ],
    featureTitle: 'لماذا تجربة المندي مميزة؟',
    features: [
      { title: 'بهارات أصلية', desc: 'توازن واضح بين الرائحة والطعم.', icon: Wheat },
      { title: 'طهي متقن', desc: 'حرارة ووقت مناسبين للحصول على قوام مثالي.', icon: Flame },
      { title: 'جودة لا تُساوم', desc: 'متابعة دقيقة لكل مرحلة تحضير.', icon: ShieldCheck },
      { title: 'مجلس بخصوصية', desc: 'جلسة عربية مريحة للعائلة والأصدقاء.', icon: UsersRound },
    ],
    galleryTitle: 'المندي والمجلس العربي',
    gallery: [siteImages.mandiMajlisFeast, siteImages.mandiFamilyTray, siteImages.mandiMajlisDay, siteImages.mandiMajlisEvening, siteImages.mandiSinglePlate],
    closingTitle: 'لمّتكم اليمنية تبدأ من هنا',
    closingText: 'تواصلوا معنا لحجز المجلس والاستفسار عن أحجام صواني المندي المناسبة لعدد ضيوفكم.',
  },

  bakery: {
    slug: 'bakery',
    variant: 'bakery',
    eyebrow: 'الفرن والحلويات',
    title: 'من الفرن إلى واجهة الحلويات',
    subtitle: 'تشكيلة تجمع الحلويات العربية والكيك والمخبوزات',
    intro:
      'تشكيلة واسعة تبدأ من الحلويات العربية الغنية بالمكسرات، وتمتد إلى الكيك والحلويات الباردة والمخبوزات اليومية بأصناف تناسب الضيافة واللمة.',
    heroImage: siteImages.bakeryHero,
    secondaryImage: siteImages.bakeryCakes,
    Icon: CakeSlice,
    heroStats: [
      { title: 'حلويات عربية', desc: 'تشكيلة من الهريسة والوربات وعش البلبل.', icon: Sparkles },
      { title: 'كيك وحلويات باردة', desc: 'قوالب وقطع وكاسات متنوعة.', icon: CakeSlice },
      { title: 'مخبوزات متنوعة', desc: 'خبز وكعك وكرواسان وأصناف للضيافة.', icon: Croissant },
      { title: 'خيارات نباتية', desc: 'أصناف محددة مثل المعمول والبيتفور النباتي.', icon: Leaf },
    ],
    story: {
      kicker: 'تشكيلة لكل ذوق',
      title: 'حلو عربي، كيك ومخبوزات في مكان واحد',
      body:
        'يجمع القسم أصنافاً كلاسيكية مثل الهريسة والوربات وعش البلبل، إلى جانب التشيز كيك والموس والتارت، مع مجموعة مخبوزات تشمل الكعك والخبز والكرواسان.',
      points: [
        { title: 'أصناف عربية', desc: 'خيارات بالقشطة والفستق والمكسرات.', icon: Sparkles },
        { title: 'قطع وقوالب', desc: 'أحجام مناسبة للمشاركة أو التقديم الفردي.', icon: CakeSlice },
        { title: 'مخبوزات', desc: 'تشكيلة من الخبز والكعك والمعروك.', icon: Croissant },
      ],
    },
    categoriesTitle: 'أصناف الفرن والحلويات',
    categories: [
      { title: 'الحلويات العربية', desc: 'هريسة ووربات وعش البلبل وأصناف مشكلة.', image: siteImages.bakeryArabic, icon: Sparkles },
      { title: 'الكيك والقوالب', desc: 'كيك وتشيز كيك وريد فيلفت ورول كيك.', image: siteImages.bakeryCakes, icon: CakeSlice },
      { title: 'الحلويات الباردة', desc: 'موس وبودينغ ومحلاية وكاسات متنوعة.', image: siteImages.bakeryPistachio, icon: Cookie },
      { title: 'المخبوزات', desc: 'كرواسان وكعك وخبز وتوست ومعروك.', image: siteImages.bakeryNuts, icon: Croissant },
    ],
    showcaseTitle: 'منتجات مميزة',
    showcase: [
      { title: 'عش البلبل', desc: 'بالشوكولا أو المكسرات ضمن تشكيلة الحلو العربي.', image: siteImages.bakeryNests, icon: Sparkles },
      { title: 'الكيك والتشيز كيك', desc: 'قطع وقوالب بنكهات وأشكال متنوعة.', image: siteImages.bakeryCakes, icon: CakeSlice },
      { title: 'حلويات بالفستق', desc: 'خيارات غنية بالفستق والمكسرات.', image: siteImages.bakeryPistachio, icon: Flower2 },
    ],
    featureTitle: 'تشكيلة تغطي كل المناسبات',
    features: [
      { title: 'حلو عربي', desc: 'تشكيلة كلاسيكية بالقشطة والفستق والمكسرات.', icon: Sparkles },
      { title: 'قطع فردية', desc: 'خيارات صغيرة مناسبة للتقديم والضيافة.', icon: Cookie },
      { title: 'قوالب متنوعة', desc: 'كيك وتشيز كيك للحظات التي تحتاج قالباً كاملاً.', icon: CakeSlice },
      { title: 'مخبوزات متعددة', desc: 'خبز وكعك وكرواسان ومعروك وتوست.', icon: Croissant },
    ],
    galleryTitle: 'لحظات من السكر والذوق',
    gallery: [siteImages.bakeryHero, siteImages.bakeryCakes, siteImages.bakeryArabic, siteImages.bakeryNests, siteImages.bakeryPistachio],
    closingTitle: 'اختاروا ما يكمل لحظاتكم الحلوة',
    closingText: 'تواصلوا معنا للاستفسار عن توفر الأصناف واختيار التشكيلة المناسبة للضيافة أو اللمة.',
  },

  'eastern-kitchen': {
    slug: 'eastern-kitchen',
    variant: 'eastern',
    eyebrow: 'المطبخ الشرقي',
    title: 'نكهات أصيلة تُروى بحكاية الشرق',
    subtitle: 'أطباق شرقية متوازنة بنكهات دافئة وتقديم راقٍ',
    intro:
      'من المقبلات إلى المشاوي والأطباق الرئيسية، يعكس المطبخ الشرقي في لمة خير روح الضيافة والمائدة الغنية بالتفاصيل.',
    heroImage: siteImages.easternHero,
    secondaryImage: siteImages.easternMezze,
    Icon: CookingPot,
    heroStats: [
      { title: 'مكونات طبيعية', desc: 'اختيارات طازجة من مصادر موثوقة.', icon: Leaf },
      { title: 'شيفات بخبرة', desc: 'وصفات متقنة بخطوات واضحة.', icon: ChefHat },
      { title: 'جودة لا تُساوم', desc: 'معايير ثابتة في التحضير والتقديم.', icon: BadgeCheck },
      { title: 'ضيافة راقية', desc: 'تفاصيل تقديم تجعل المائدة أجمل.', icon: Crown },
    ],
    story: {
      kicker: 'قصتنا في كل طبق',
      title: 'تراث المائدة الشرقية بأسلوب لمة خير',
      body:
        'نستلهم من المطبخ الشرقي الغني، حيث تتلاقى الخضروات، التوابل، الأرز، واللحوم في أطباق مبنية على التوازن بين الطعم والرائحة والشكل.',
      points: [
        { title: 'مقبلات متنوعة', desc: 'بداية غنية ومليئة بالألوان.', icon: Salad },
        { title: 'أطباق رئيسية', desc: 'أطباق دسمة ومريحة للمشاركة.', icon: CookingPot },
        { title: 'مشاوي', desc: 'نكهة الفحم والتتبيلة المتوازنة.', icon: Flame },
      ],
    },
    categoriesTitle: 'أصناف المطبخ الشرقي',
    categories: [
      { title: 'المقبلات', desc: 'تشكيلة باردة وساخنة لبداية غنية.', image: siteImages.easternKibbeh, icon: Salad },
      { title: 'الأطباق الرئيسية', desc: 'أطباق أرز ووصفات بيتية دافئة.', image: siteImages.easternRice, icon: CookingPot },
      { title: 'المشاوي', desc: 'تتبيلات عطرية ونكهة الفحم.', image: siteImages.easternGrill, icon: Flame },
      { title: 'السلطات', desc: 'خضار طازجة ونكهات منعشة.', image: siteImages.salad1, icon: Soup },
    ],
    showcaseTitle: 'أطباق مميزة',
    showcase: [
      { title: 'يلنجي وورق عنب', desc: 'نكهة شرقية خفيفة وتقديم مرتب.', image: siteImages.easternYalanji, icon: Leaf },
      { title: 'مشاوي مشكلة', desc: 'تتبيلات غنية وخضار مشوية على الفحم.', image: siteImages.easternMixedGrill, icon: Flame },
      { title: 'أرز شرقي بالمكسرات', desc: 'طبق دافئ مصمم للمشاركة واللمة.', image: siteImages.easternRiceTray, icon: CookingPot },
    ],
    featureTitle: 'لماذا تختار المطبخ الشرقي؟',
    features: [
      { title: 'أصالة النكهة', desc: 'وصفات مستوحاة من المائدة الشرقية.', icon: Star },
      { title: 'توازن الطعم', desc: 'تتبيل مدروس لا يطغى على المكونات.', icon: BadgeCheck },
      { title: 'تجربة بصرية', desc: 'ألوان وترتيب يفتح الشهية.', icon: Images },
      { title: 'مائدة مشاركة', desc: 'أطباق مصممة للّمة والضيافة.', icon: UsersRound },
    ],
    galleryTitle: 'من مطبخنا إلى مائدتك',
    gallery: [siteImages.easternMain, siteImages.easternRiceTray, siteImages.easternMixedGrill, siteImages.easternTabbouleh, siteImages.easternYalanji],
    closingTitle: 'مائدتكم الشرقية تبدأ من هنا',
    closingText: 'تواصلوا معنا لمعرفة الأصناف المتوفرة واختيار ما يناسب زيارتكم ولمّتكم.',
  },

  'event-hall': {
    slug: 'event-hall',
    variant: 'hall',
    eyebrow: 'صالة المناسبات',
    title: 'صالة تليق بأجمل مناسباتكم',
    subtitle: 'مساحة أنيقة تجمع بين الراحة والمرونة والتفاصيل الراقية',
    intro:
      'مساحة أنيقة بتفاصيل هادئة وتجهيزات مرنة، صُممت لتحتضن حفلات الزفاف والخطوبة والمناسبات العائلية وفعاليات الشركات بخصوصية وراحة.',
    heroImage: siteImages.hallHero,
    secondaryImage: siteImages.hallInterior,
    Icon: Landmark,
    heroStats: [
      { title: 'خصوصية وراحة', desc: 'أجواء هادئة تحفظ خصوصية المناسبة.', icon: LockKeyhole },
      { title: 'تنسيق كامل', desc: 'ترتيب الطاولات، الإضاءة، والديكور.', icon: Flower2 },
      { title: 'تجهيزات حديثة', desc: 'صوت، شاشات، وإضاءة مناسبة.', icon: Monitor },
      { title: 'متابعة باهتمام', desc: 'تنسيق واضح للتفاصيل منذ الاستفسار.', icon: Crown },
    ],
    story: {
      kicker: 'فخامة بتفاصيل مدروسة',
      title: 'أناقة هادئة ومرونة في كل تفصيل',
      body:
        'يعتمد تصميم الصالة على ألوان فاتحة تمنحها اتساعاً بصرياً، مع توزيع مرن يساعد على تهيئة المساحة وفق طبيعة المناسبة. من الاستقبال إلى أماكن الجلوس، تبقى التفاصيل منظمة ومريحة للضيوف.',
      points: [
        { title: 'إضاءة قابلة للتخصيص', desc: 'تدرجات تناسب أجواء كل مناسبة.', icon: Sparkles },
        { title: 'نظام صوت حديث', desc: 'تجهيز مناسب للعروض والكلمات.', icon: Volume2 },
        { title: 'توزيع مرن', desc: 'ترتيب يناسب طبيعة المناسبة.', icon: UsersRound },
      ],
    },
    categoriesTitle: 'أنواع المناسبات',
    categories: [
      { title: 'حفلات الزفاف', desc: 'مساحة أنيقة لبداية لا تُنسى.', image: siteImages.hallWide, icon: Crown },
      { title: 'حفلات الخطوبة', desc: 'أجواء حميمة وتفاصيل ناعمة.', image: siteImages.hallChandelier, icon: PartyPopper },
      { title: 'المناسبات العائلية', desc: 'تخرج وأعياد ولقاءات عائلية.', image: siteImages.hallSeatingFront, icon: UsersRound },
      { title: 'فعاليات الشركات', desc: 'اجتماعات ولقاءات وفعاليات رسمية.', image: siteImages.hallOverview, icon: Building2 },
    ],
    showcaseTitle: 'تفاصيل الصالة',
    showcase: [
      { title: 'اتساع ووضوح', desc: 'مساحة مضيئة تمنح الضيوف حركة مريحة.', image: siteImages.hallWide, icon: Landmark },
      { title: 'إضاءة أنيقة', desc: 'ثريا وتفاصيل ضوئية تمنح الصالة حضوراً راقياً.', image: siteImages.hallChandelier, icon: Camera },
      { title: 'توزيع مرن', desc: 'ترتيب المقاعد بما يلائم طبيعة المناسبة.', image: siteImages.hallSeatingPerspective, icon: Utensils },
    ],
    featureTitle: 'مميزات الصالة',
    features: [
      { title: 'تصميم مضيء', desc: 'ألوان فاتحة وإضاءة تمنح المكان راحة بصرية.', icon: UsersRound },
      { title: 'مصلى خاص', desc: 'تفصيل مريح للزوار.', icon: Landmark },
      { title: 'تكييف', desc: 'أجواء مريحة للضيوف خلال المناسبة.', icon: Snowflake },
      { title: 'شاشات عرض', desc: 'تجهيز مناسب لعرض الصور والمحتوى.', icon: Monitor },
    ],
    galleryTitle: 'جولة داخل الصالة',
    gallery: [siteImages.hallWide, siteImages.hallChandelier, siteImages.hallSeatingFront, siteImages.hallSeatingSide, siteImages.hallSeatingPerspective],
    closingTitle: 'دعوا مناسبتكم تبدأ من مكان يليق بها',
    closingText: 'تواصلوا معنا لمعرفة توفر التاريخ، ترتيب زيارة للصالة، ومناقشة التفاصيل التي تناسب مناسبتكم.',
  },
}
