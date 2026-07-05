HOW THE PORTFOLIO / "ΕΡΓΑ" GALLERY WORKS
=========================================

Everything you see in the "Έργα" section of the website comes from THIS folder.
You never need to touch any code — just work with folders, photos and text files.

Each sub-folder here is one GROUP (one card on the website).


-------------------------------------------------
TO ADD A NEW PHOTO TO AN EXISTING GROUP
-------------------------------------------------
1. Open the group's folder (e.g. "1 - Apartment Buildings").
2. Copy your photo into it. Any .jpg, .jpeg, .png, .webp are fine.
   Use a simple name with no spaces, e.g.  paphos-tower.jpg
3. Next to it, create a text file with the SAME name but ending in .txt:
   paphos-tower.txt
   Put the caption inside, on two lines:

       EL: Το ελληνικό κείμενο που θα εμφανιστεί κάτω από τη φωτογραφία.
       EN: The English text that appears under the photo.

   (If you skip the .txt file, the photo simply shows with no caption.)
4. Save. That's it.


-------------------------------------------------
TO ADD A WHOLE NEW GROUP (a new "kind")
-------------------------------------------------
1. Create a new folder here. Start the name with a number to set its order,
   then the ENGLISH group name, e.g.:
       4 - Commercial Buildings
2. Inside it, add a file named  title.el.txt  containing the GREEK name, e.g.:
       Εμπορικά Κτίρια
3. Add your photos + their .txt caption files, exactly as above.


-------------------------------------------------
OPTIONAL EXTRAS
-------------------------------------------------
- COVER IMAGE: the photo shown on the group's card is the first photo by name.
  To pick a specific one, put a file named  cover.jpg  in the folder.
- ORDER OF PHOTOS: photos are shown in name order, so naming them 01, 02, 03...
  is an easy way to control the sequence.
- ORDER OF GROUPS: controlled by the number at the start of the folder name
  ("1 - ...", "2 - ..."). The number is hidden from visitors.


-------------------------------------------------
WHAT HAPPENS AFTER YOU ADD FILES
-------------------------------------------------
When you upload/commit your changes to GitHub, an automatic job scans this
folder and updates the website within about a minute. You do not run anything.

(Under the hood it regenerates the file "gallery.json" in the project root.
Don't edit that file by hand — it gets overwritten automatically.)
