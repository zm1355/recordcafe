from flask import Flask
from api.endpoints.user_reviews import create_review, get_reviews, delete_review
from features.screen_recording import ScreenRecorder
from features.user_reviews import UserReviewManager
from features.group_feature import GroupManager

app = Flask(__name__)

# Initialize features
screen_recorder = ScreenRecorder()
user_review_manager = UserReviewManager()
group_manager = GroupManager()

# API routes
@app.route('/api/reviews', methods=['POST'])
def add_review():
    return create_review()

@app.route('/api/reviews', methods=['GET'])
def fetch_reviews():
    return get_reviews()

@app.route('/api/reviews/<review_id>', methods=['DELETE'])
def remove_review(review_id):
    return delete_review(review_id)

if __name__ == '__main__':
    app.run(debug=True)