import os

directory = r'C:\\Users\\Namel\\OneDrive\\Documents\\Ember\\images'

for filename in os.listdir(directory):
    base_file, ext = os.path.splitext(filename)
    if ext.lower() != '.png':
        new_filename = base_file + '.png'
        os.rename(os.path.join(directory, filename), os.path.join(directory, new_filename))