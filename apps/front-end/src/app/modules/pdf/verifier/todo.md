# TODO Notes

* Need to update `PDFParser` to add in uuid() for each Card to better track/find items
* See if there is a way to track meta data of each card/row in the editor, but not show user
  * Add in Error highlighting once I figure that out

## New Idea

* Probably should get rid of the ID in the editor, just will add confusion
* Should create an Needs Attention Wizard that you can click to open in a new Modal (Large)
  * New Button near the Needs Attention warning area to open Modal
  * Modal will open to first row that Needs Attention
    * Will display Ace Editor for fixing issue
    * Should also display the name of the Category the row is from
    * Options for Modal are 'Exit/Cancel', 'Save & Continue'
    * Have a Panel (in Hidden Mode) where User can view the full Category to compare format during editing
  * When the Modal is closed, propogate the edits/fixes down to the editor if applicaible
  * Pop up a spinner during this propogation, make it run for a minimum of .5-1 second
  * Once all items have been addressed from the Needs Attention list, re-run the Validation again to repeat the process
  * Maybe add an addition warning/confirmation modal to force export it if issues are present
