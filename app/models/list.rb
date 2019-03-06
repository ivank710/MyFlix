# == Schema Information
#
# Table name: lists
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  movie_id   :integer          not null
#

class List < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true
  validates :movie_id, presence: true, uniqueness: true

  belongs_to :user
  belongs_to :movie
end
