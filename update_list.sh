rm -f easylist.txt
echo "[Adblock Plus 1.1]" > easy_modify_list.txt
echo "! Title: Easy modify List" >> easy_modify_list.txt
echo "! Update: "`date -I` >> easy_modify_list.txt
curl https://easylist-downloads.adblockplus.org/easylist.txt|sed -e "/^@@.*/d"|sed -e "/\[/d"|sed -e "/^! [CVTLHPio].* /d" >> easy_modify_list.txt
cat easy_modify_list.txt|sed -e "s/! Title: .*/! Title: Easy modify List \+ Japanese Filter/" > easylist+fanboy-japanese+myfilter.txt
cat fanboy-japanese+myfilter.txt >> easylist+fanboy-japanese+myfilter.txt
