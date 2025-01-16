class UserReviewManager:
    def __init__(self):
        self.reviews = []

    def add_review(self, review):
        self.reviews.append(review)
        return {"message": "Review added successfully."}

    def fetch_reviews(self):
        return self.reviews

    def remove_review(self, review_id):
        if 0 <= review_id < len(self.reviews):
            self.reviews.pop(review_id)
            return {"message": "Review removed successfully."}
        return {"message": "Review not found."}