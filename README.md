# README

## members table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|t.references: user, foreign_key: true, index: true|
|group_id|integer|null: false, foreign_key: true, index: true|

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
- has_many :groups, through: :members
- has_many :members
- has_many :message

## Groups table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|integer|foreign_key: true, index: true|

### Association
- has_many :users, through: :members
- has_many :members
- accepts_nested_attributes_for :members

## messages table
|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|image|text||
|user_id|integer|null: false, foreign_key: true, index: true|
|group_id|integer|null: false, foreign_key: true, index: true|

### Association
- belongs_to :group
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
