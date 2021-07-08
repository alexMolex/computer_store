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
	rating: { type: DataTypes.INTEGER, defaultValue: 0 },
	img: { type: DataTypes.STRING, allowNull: false },
})

const UserConfigDevice = sequelize.define('user_config_device', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	price: { type: DataTypes.INTEGER, allowNull: false },
	RAM: { type: DataTypes.INTEGER, allowNull: false },
	SSD: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
	storageVolume: { type: DataTypes.INTEGER, allowNull: false },
	overclocking: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
})


const UserConfigBaskeDevice = sequelize.define('user_config_basket_device', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Type = sequelize.define('type', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Processor = sequelize.define('processor', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Videocard = sequelize.define('videocard', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
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

Processor.hasMany(UserConfigDevice, { as: 'config_processor' })
UserConfigDevice.belongsTo(Processor)

Videocard.hasMany(UserConfigDevice, { as: 'config_videocard' })
UserConfigDevice.belongsTo(Videocard)

Basket.hasMany(UserConfigBaskeDevice)
UserConfigBaskeDevice.belongsTo(Basket)

UserConfigDevice.hasMany(UserConfigBaskeDevice)
UserConfigBaskeDevice.belongsTo(UserConfigDevice)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Processor.hasMany(Device)
Device.belongsTo(Processor)

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
	UserConfigBaskeDevice,
	UserConfigDevice,
}












