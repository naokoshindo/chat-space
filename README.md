# README

## group_users table
|Column|Type|Options|
|------|----|-------|
|user_id|references|foreign_key: true, index: true|
|group_id|references|foreign_key: true, index: true|

### Association
- belongs_to :group
- belongs_to :user

## users table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|pasword|string|null: false|

### Association
- has_many :groups, through: :group_users
- has_many :group_users
- has_many :messages

## Groups table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, index: true|
|user_id|references|foreign_key: true, index: true|

### Association
- has_many :users, through: :group_users
- has_many :group_users
- accepts_nested_attributes_for :users

## messages table
|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|image|text||
|user_id|references|null: false, foreign_key: true, index: true|
|group_id|references|null: false, foreign_key: true, index: true|

### Association
- belongs_to :user




----------------------------------
This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
