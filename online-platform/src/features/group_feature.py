class GroupManager:
    def __init__(self):
        self.groups = {}

    def create_group(self, group_name):
        if group_name not in self.groups:
            self.groups[group_name] = []
            return f"Group '{group_name}' created."
        return f"Group '{group_name}' already exists."

    def add_member(self, group_name, member_name):
        if group_name in self.groups:
            if member_name not in self.groups[group_name]:
                self.groups[group_name].append(member_name)
                return f"Member '{member_name}' added to group '{group_name}'."
            return f"Member '{member_name}' is already in group '{group_name}'."
        return f"Group '{group_name}' does not exist."

    def get_group_members(self, group_name):
        if group_name in self.groups:
            return self.groups[group_name]
        return f"Group '{group_name}' does not exist."