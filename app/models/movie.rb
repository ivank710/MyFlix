# == Schema Information
#
# Table name: movies
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :text             not null
#  year        :integer          not null
#  genre       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Movie < ApplicationRecord
  validates :title, :description, :year, :genre, presence: true
  validates :title, uniqueness: true

  has_one_attached :video
  has_one_attached :photo
end 
