from flask import Blueprint, request, jsonify

user_reviews_bp = Blueprint('user_reviews', __name__)

reviews = []

@user_reviews_bp.route('/reviews', methods=['POST'])
def create_review():
    data = request.json
    review = {
        'id': len(reviews) + 1,
        'user_id': data['user_id'],
        'video_id': data['video_id'],
        'content': data['content']
    }
    reviews.append(review)
    return jsonify(review), 201

@user_reviews_bp.route('/reviews/<int:review_id>', methods=['GET'])
def get_reviews(review_id):
    review = next((r for r in reviews if r['id'] == review_id), None)
    if review is None:
        return jsonify({'error': 'Review not found'}), 404
    return jsonify(review)

@user_reviews_bp.route('/reviews/<int:review_id>', methods=['DELETE'])
def delete_review(review_id):
    global reviews
    reviews = [r for r in reviews if r['id'] != review_id]
    return jsonify({'message': 'Review deleted'}), 204