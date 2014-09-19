# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

stocks = Stock.create([
	{
		symbol: 'AAPL',
		name: 'Apple',
		bid: 101.3
	},
	{
		symbol: 'MSFT',
		name: 'Microsoft',
		bid: 45.4
	},
	{
		symbol: 'GOOG',
		name: 'Google',
		bid: 66.1
	},
	{
		symbol: 'TWTR',
		name: 'Twitter',
		bid: 50.1
	},
	{
		symbol: 'FB',
		name: 'Facebook',
		bid: 70.0
	}

])