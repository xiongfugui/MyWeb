export interface Product {
  id: number;
  name: string;
  category: 'self-service' | 'automatic';
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  priceRange: string;
  imageUrl: string;
}

export interface CompanyInfo {
  name: string;
  slogan: string;
  description: string;
  history: { year: string; event: string }[];
  values: { icon: string; title: string; description: string }[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const companyInfo: CompanyInfo = {
  name: '新海洋生活馆',
  slogan: '如海洋般清澈，让爱车焕发光彩',
  description: '新海洋生活馆致力于为车主提供如海洋般清澈洁净的洗车体验。我们专注于自助洗车设备的研发与创新，以先进技术和优质服务，打造便捷、高效、环保的洗车解决方案，让每一辆车都能重焕新生。',
  history: [
    { year: '2007', event: '公司成立，推出第一代自助洗车机' },
    { year: '2017', event: '获得国家高新技术企业认证' },
    { year: '2019', event: '全自动洗车机产品线正式上线' },
    { year: '2021', event: '全国服务网点突破1000个' },
    { year: '2026', event: '智能洗车系统全面升级' },
  ],
  values: [
    { icon: 'Lightbulb', title: '创新驱动', description: '持续创新，引领行业发展' },
    { icon: 'Heart', title: '客户至上', description: '以客户需求为中心，提供优质服务' },
    { icon: 'Shield', title: '品质保证', description: '严格把控产品质量，确保安全可靠' },
    { icon: 'Leaf', title: '环保理念', description: '倡导绿色洗车，节约水资源' },
  ],
};

export const products: Product[] = [
  {
    id: 1,
    name: 'JM-S01 标准型自助洗车机',
    category: 'self-service',
    description: '经济实惠的入门级自助洗车机，适合小型停车场和社区使用。操作简单，功能齐全，是创业首选。',
    features: ['高压水枪清洗', '泡沫喷洒功能', '清水冲洗', '吸尘功能', '投币/扫码支付'],
    specifications: [
      { label: '功率', value: '3.0kW' },
      { label: '水压', value: '0-80bar' },
      { label: '流量', value: '12-18L/min' },
      { label: '电压', value: '220V/50Hz' },
      { label: '尺寸', value: '1200×800×2000mm' },
      { label: '重量', value: '150kg' },
    ],
    priceRange: '¥8,000 - ¥12,000',
    imageUrl: '/pro1.png',
  },
  {
    id: 2,
    name: 'JM-S02 豪华型自助洗车机',
    category: 'self-service',
    description: '高端配置的自助洗车机，配备智能控制系统和多种清洗模式，适合大型停车场和商业区。',
    features: ['智能控制屏幕', '多种清洗模式', '温水清洗', '风干功能', '会员系统', '远程监控'],
    specifications: [
      { label: '功率', value: '5.5kW' },
      { label: '水压', value: '0-120bar' },
      { label: '流量', value: '15-25L/min' },
      { label: '电压', value: '380V/50Hz' },
      { label: '尺寸', value: '1500×1000×2200mm' },
      { label: '重量', value: '280kg' },
    ],
    priceRange: '¥18,000 - ¥28,000',
    imageUrl: '/pro2.png',
  },
  {
    id: 3,
    name: 'JM-A01 隧道式全自动洗车机',
    category: 'automatic',
    description: '高效的隧道式洗车机，车辆驶入后全自动完成清洗过程，适合车流量大的场所。',
    features: ['全自动清洗', '泡沫刷洗', '高压水冲洗', '风干系统', '底盘清洗', '3分钟快速洗车'],
    specifications: [
      { label: '功率', value: '22kW' },
      { label: '洗车速度', value: '3-5辆/分钟' },
      { label: '适用车型', value: '轿车/SUV/小型货车' },
      { label: '电压', value: '380V/50Hz' },
      { label: '尺寸', value: '12000×3000×3500mm' },
      { label: '重量', value: '3500kg' },
    ],
    priceRange: '¥150,000 - ¥250,000',
    imageUrl: '/pro3.png',
  },
  {
    id: 4,
    name: 'JM-A02 往复式全自动洗车机',
    category: 'automatic',
    description: '灵活的往复式洗车机，占地面积小，清洗效果好，适合各种场地使用。',
    features: ['往复式清洗', '仿形刷洗', '智能感应', '水蜡护理', '轮毂清洗', '节能环保'],
    specifications: [
      { label: '功率', value: '15kW' },
      { label: '洗车时间', value: '2-4分钟/辆' },
      { label: '适用车型', value: '轿车/SUV' },
      { label: '电压', value: '380V/50Hz' },
      { label: '尺寸', value: '5000×3000×3200mm' },
      { label: '重量', value: '2000kg' },
    ],
    priceRange: '¥80,000 - ¥150,000',
    imageUrl: '/pro4.png',
  },
];

export const stats: Stat[] = [
  { value: '5000+', label: '设备销量' },
  { value: '1000+', label: '服务网点' },
  { value: '98%', label: '客户满意度' },
  { value: '8年', label: '行业经验' },
];

export const services: Service[] = [
  { id: 1, title: '售后服务', description: '全国联保，24小时响应，专业工程师上门服务', icon: 'Wrench' },
  { id: 2, title: '技术支持', description: '提供安装指导、操作培训、系统升级等技术支持', icon: 'Headphones' },
  { id: 3, title: '配件供应', description: '原厂配件供应，快速发货，确保设备正常运行', icon: 'Package' },
  { id: 4, title: '运营指导', description: '提供场地规划、运营方案、营销策略等专业指导', icon: 'ChartLine' },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: '自助洗车机如何操作？',
    answer: '操作非常简单，只需三步：1. 扫码或投币选择清洗模式；2. 使用高压水枪清洗车身；3. 完成后扫码支付即可。设备配有详细的操作指南，首次使用也能轻松上手。',
  },
  {
    id: 2,
    question: '设备的耗电量和耗水量是多少？',
    answer: '我们的设备采用节能环保设计，单次洗车耗电量约0.5-1度，耗水量约30-50升，比传统洗车方式节省50%以上的水资源。',
  },
  {
    id: 3,
    question: '购买设备后提供安装服务吗？',
    answer: '是的，我们提供全国范围内的上门安装服务。专业工程师会在设备到货后3-5个工作日内上门安装调试，并对操作人员进行培训。',
  },
  {
    id: 4,
    question: '设备保修期是多长时间？',
    answer: '整机保修12个月，核心部件保修24个月。保修期内出现任何质量问题，我们将免费维修或更换配件。',
  },
  {
    id: 5,
    question: '如何选择适合自己的洗车设备？',
    answer: '选择设备需要考虑以下因素：场地大小、预计车流量、预算、供电供水条件等。我们的销售团队会根据您的具体情况提供专业的选型建议。',
  },
  {
    id: 6,
    question: '支持哪些支付方式？',
    answer: '我们的设备支持多种支付方式：微信支付、支付宝、银联刷卡、投币等。同时支持会员充值和优惠券功能，方便客户使用。',
  },
];

export const contactInfo = {
  address: '广州市海珠区琶洲东路8号',
  phone: '400-888-8888',
  email: 'contact@gzlawh.cn',
  workingHours: '周一至周日 09:00-18:00',
};
