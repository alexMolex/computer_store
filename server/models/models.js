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
	price: { type: DataTypes.INTEGER, allowNull: false }
})

const Contacts = sequelize.define('contacts', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, allowNull: false },
	description: { type: DataTypes.STRING, allowNull: false }
})

const Order = sequelize.define('order', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	processor: { type: DataTypes.STRING, allowNull: false },
	videocard: { type: DataTypes.STRING, allowNull: false },
	RAM: { type: DataTypes.INTEGER, allowNull: false },
})


const TypeBrand = sequelize.define('type_brand', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const TypeProcessor = sequelize.define('type_processor', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const TypeVideocard = sequelize.define('type_videocard', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BrandProcessor = sequelize.define('brand_processor', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BrandVideocard = sequelize.define('brand_videocard', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})



User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(OrderProcessing)
OrderProcessing.belongsTo(User)

OrderProcessing.hasMany(Contacts, { as: 'contscts' })
Contacts.belongsTo(OrderProcessing)

OrderProcessing.hasMany(Order, { as: 'order' })
Order.belongsTo(OrderProcessing)

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

Videocard.belongsToMany(Brand, { through: BrandVideocard })
Brand.belongsToMany(Videocard, { through: BrandVideocard })

Type.belongsToMany(Videocard, { through: TypeVideocard })
Videocard.belongsToMany(Type, { through: TypeVideocard })

Processor.belongsToMany(Brand, { through: BrandProcessor })
Brand.belongsToMany(Processor, { through: BrandProcessor })

Type.belongsToMany(Processor, { through: TypeProcessor })
Processor.belongsToMany(Type, { through: TypeProcessor })


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
	BrandVideocard,
	TypeVideocard,
	BrandProcessor,
	TypeProcessor,
}











