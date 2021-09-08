const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: "USER" },
})

const Basket = sequelize.define('basket', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketDevice = sequelize.define('basket_device', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Device = sequelize.define('device', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
	price: { type: DataTypes.INTEGER, allowNull: false },
	totalPrice: { type: DataTypes.INTEGER, allowNull: false },
	rating: { type: DataTypes.INTEGER, defaultValue: 0 },
	RAM: { type: DataTypes.INTEGER, allowNull: false },
	SSD: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
	storageVolume: { type: DataTypes.INTEGER, allowNull: false },
	overclocking: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
})

const UserConfigDevice = sequelize.define('user_config_device', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	price: { type: DataTypes.INTEGER, allowNull: false },
	RAM: { type: DataTypes.INTEGER, allowNull: false },
	SSD: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
	storageVolume: { type: DataTypes.INTEGER, allowNull: false },
	overclocking: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
})


const Type = sequelize.define('type', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Processor = sequelize.define('processor', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
	price: { type: DataTypes.INTEGER, allowNull: false },
	brand: { type: DataTypes.STRING, allowNull: false },
	socket: { type: DataTypes.STRING, allowNull: false },
	coresThreads: { type: DataTypes.STRING, allowNull: false },
	technicalProcess: { type: DataTypes.STRING, allowNull: false },
	frequency: { type: DataTypes.STRING, allowNull: false },
	memoryType: { type: DataTypes.STRING, allowNull: false },
	overclock: { type: DataTypes.BOOLEAN, allowNull: false },
	tdp: { type: DataTypes.STRING, allowNull: false },
	integratedVideoCard: { type: DataTypes.BOOLEAN, allowNull: false },
	integratedVideoCardName: { type: DataTypes.STRING, allowNull: true },
	peakConsumption: { type: DataTypes.INTEGER, allowNull: true },
})

const Videocard = sequelize.define('videocard', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
	price: { type: DataTypes.INTEGER, allowNull: false },
	brand: { type: DataTypes.STRING, allowNull: false },
	memoryValue: { type: DataTypes.INTEGER, allowNull: false },
	frequency: { type: DataTypes.STRING, allowNull: false },
	memoryType: { type: DataTypes.STRING, allowNull: false },
	memoryBus: { type: DataTypes.INTEGER, allowNull: false },
	peakConsumption: { type: DataTypes.INTEGER, allowNull: true },
})


const ComputerCase = sequelize.define('computer_case', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
	price: { type: DataTypes.INTEGER, allowNull: false },
	img: { type: DataTypes.STRING, allowNull: false },
	lengthHeightWidth: { type: DataTypes.STRING, allowNull: false },
	caseMaterials: { type: DataTypes.STRING, allowNull: false },
	USB: { type: DataTypes.STRING, allowNull: false },
	RGB: { type: DataTypes.BOOLEAN, allowNull: false },
})

const Brand = sequelize.define('brand', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
})


const Rating = sequelize.define('rating', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	rate: { type: DataTypes.INTEGER, allowNull: false },
})

const DeviceInfo = sequelize.define('device_info', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, allowNull: false },
	description: { type: DataTypes.STRING, allowNull: false },
})


const OrderProcessing = sequelize.define('order_processing', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	userName: { type: DataTypes.STRING, allowNull: false },
	adress: { type: DataTypes.STRING, allowNull: false },
	price: { type: DataTypes.INTEGER, allowNull: false },
	phoneNumber: { type: DataTypes.STRING, allowNull: false },
	remark: { type: DataTypes.STRING, allowNull: true },
	status: { type: DataTypes.STRING, allowNull: false },
})


const Contacts = sequelize.define('contacts_info', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, allowNull: false },
	description: { type: DataTypes.STRING, allowNull: false }
})

const Order = sequelize.define('order_info', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	RAM: { type: DataTypes.INTEGER, allowNull: false },
	SSD: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
	storageVolume: { type: DataTypes.INTEGER, allowNull: false },
	overclocking: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
})


const TypeBrand = sequelize.define('type_brand', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})




User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(UserConfigDevice)
UserConfigDevice.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(OrderProcessing)
OrderProcessing.belongsTo(User)

OrderProcessing.hasMany(Contacts, { as: 'contacts' })
Contacts.belongsTo(OrderProcessing)


OrderProcessing.hasMany(Order, { as: 'order' })
Order.belongsTo(OrderProcessing)

Processor.hasMany(Order, { as: 'processor' })
Order.belongsTo(Processor)

Videocard.hasMany(Order, { as: 'videocard' })
Order.belongsTo(Videocard)

ComputerCase.hasMany(Order, { as: 'order_computer_case' })
Order.belongsTo(ComputerCase)

ComputerCase.hasMany(UserConfigDevice, { as: 'config_computer_case' })
UserConfigDevice.belongsTo(ComputerCase)

Processor.hasMany(UserConfigDevice, { as: 'config_processor' })
UserConfigDevice.belongsTo(Processor)

Videocard.hasMany(UserConfigDevice, { as: 'config_videocard' })
UserConfigDevice.belongsTo(Videocard)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Processor.hasMany(Device)
Device.belongsTo(Processor)

ComputerCase.hasMany(Device)
Device.belongsTo(ComputerCase)

Videocard.hasMany(Device)
Device.belongsTo(Videocard)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, { as: 'info' })
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, { through: TypeBrand })
Brand.belongsToMany(Type, { through: TypeBrand })



module.exports = {
	User,
	Basket,
	BasketDevice,
	Device,
	Type,
	Brand,
	Processor,
	Videocard,
	Rating,
	DeviceInfo,
	OrderProcessing,
	Contacts,
	Order,
	TypeBrand,
	UserConfigDevice,
	ComputerCase,
}












